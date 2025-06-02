import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {SharingService} from 'src/app/services/sharing.service';

import {environment} from 'src/environments/environment';
import {CartService} from 'src/app/services/cart.service';
import {productosMysql} from 'src/app/interfaces/productos.interface';

//Datos para enviar a mercado pago
import {mercadopago} from 'src/app/interfaces/mercadopago.interface';
import {payerMercado} from 'src/app/interfaces/payermercado.interface';
import {payerMercado_phone} from 'src/app/interfaces/payermercado_phone.interface';
import {payerMercado_address} from 'src/app/interfaces/payermercado_address.interface';
import { formatDate } from '@angular/common';

@Component({
    selector: 'app-resumen-compras',
    templateUrl: './resumen-compras.component.html',
    styleUrls: ['./resumen-compras.component.css'],
})
export class ResumenComprasComponent {
    //Mercado Pago
    private baseUrl = 'https://api.mercadopago.com';
    initPoint: any;
    items: any;
    returnUrl: any;

    //Orden Total
    carrito: productosMysql[] = [];
    subtotal: number = 0;
    envio: number = 90;
    total: number = 0;

    public_key: any = "TEST-037521a2-f977-461f-95a1-a7e8723fe9ce";

    //arreglos de mercado pago
    mercadoPagos: mercadopago[] = [];
    userpayerMercado: payerMercado = {};

    phone: payerMercado_phone={};
    address: payerMercado_address={};

    payerDatos: any[];

    //datos compra y user datos
    userData: any;
    datosCompra: any[];
    constructor(private http: HttpClient, private router: Router, private cart: CartService, private dataSharing: SharingService, private route: ActivatedRoute) {}

    ngOnInit() {
        //Cargar Valores iniciales
        this.total = this.dataSharing.infoTotal;
        this.route.queryParams.subscribe((params) => {
            this.userData = JSON.parse(params['userData']);
            console.log(this.userData);
            this.datosCompra = JSON.parse(params['datosCompra']);
            /* console.log(this.datosCompra); */
        });

        //Calcular total
        this.calcularsubTotal();
        /* console.log(this.calcularTotal); */
        this.calcularTotal();
        /* console.log(this.calcularTotal); */

        //datos mercado pago

        //items
        this.datosCompra.forEach((compra) => {
            let mercPag: mercadopago = {};
            let precioNumero: string = compra.precio;
            let precio_unit: number = parseInt(precioNumero);
            mercPag.unit_price = precio_unit;
            mercPag.title = compra.nombre_producto;
            mercPag.quantity = compra.cantidad;
            mercPag.category_id = compra.categoria;
            this.mercadoPagos.push(mercPag);
        });

        console.log('Estamos entrando al foreach items');
        console.log(this.mercadoPagos);

        //payer

        const fecha = formatDate(new Date(), 'yyyy-MM-dd HH:mm:ss', 'en-US')
        console.log(fecha);
        this.userpayerMercado.name = this.userData.nombre;
        this.userpayerMercado.surname = this.userData.apellido;
        this.userpayerMercado.email = this.userData.correo;
        this.userpayerMercado.date_created = fecha;
        this.userpayerMercado.last_purchase = this.total;

        console.log('Estamos entrando al foreach payer');
        console.log(this.userpayerMercado);

        this.phone.area_code = this.userData.area_code;
        this.phone.number = this.userData.telefono;
        console.log('datos del telefono');
        console.log(this.phone);


        this.address.street_name = this.userData.direccion;
        this.address.street_number = this.userData.ciudad;
        this.address.zip_code = this.userData.codigo_postal;
        console.log('datos del telefono');
        console.log(this.address);

        //End datos mercado pago
    }

    //Calcular el total
    calcularsubTotal(): void {
        this.subtotal = this.datosCompra.reduce((acumulador, producto) => {
            const price = producto.precio ? producto.precio : 0;
            /* console.log("precio", price); */
            const quantity = producto.cantidad ? producto.cantidad : 0;
            /* console.log("cantidad" ,quantity); */
            return acumulador + price * quantity;
        }, 0);
    }
    calcularTotal() {
        if (this.subtotal >= 1000) {
            this.total = this.subtotal;
        } else {
            this.total = this.subtotal + this.envio;
        }
    }


    //Mercado Pago

    realizarPago() {
        this.returnUrl = 'http://localhost:4200';
        this.cart.realizarPago(this.address,this.phone,this.userpayerMercado, this.mercadoPagos, this.returnUrl).subscribe(
            (response: any) => {
                console.log('Respuesta del servidor:', response);
                window.open(response, "_blank");
                /* window.location.href = response; */
            },
            (error) => {
                console.error('Error en la solicitud:', error);
            }
        );
    }
}
