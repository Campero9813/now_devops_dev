import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

//Rutas
import { AppRoutingModule } from './app-routing.module';

//Componentes
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { ProductoComponent } from './pages/producto/producto.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { AgregarCarritoComponent } from './buttons/agregar-carrito/agregar-carrito.component';
import { PruebaListarMysqlComponent } from './pages/prueba-listar-mysql/prueba-listar-mysql.component';
import { PruebaEditarProdComponent } from './pages/prueba-editar-prod/prueba-editar-prod.component';
import { CarritoDespComponent } from './buttons/carrito-desp/carrito-desp.component';
import { BolsaTrabajoComponent } from './pages/bolsa-trabajo/bolsa-trabajo.component';
import { SucursalesComponent } from './pages/sucursales/sucursales.component';
import { ContactanosComponent } from './pages/contactanos/contactanos.component';
import { GuardarProductoComponent } from './buttons/guardar-producto/guardar-producto.component';
import { IngresarProductoComponent } from './pages/ingresar-producto/ingresar-producto.component';
import { AdminInicioComponent } from './pages/admin-inicio/admin-inicio.component';
import { AdminComponent } from './shared/admin/admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './auth/login/login.component';
import { HeaderNewComponent } from './shared/header-new/header-new.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { DirEnvioComponent } from './pages/dir-envio/dir-envio.component';
import { ResumenComprasComponent } from './pages/resumen-compras/resumen-compras.component';
import { SubMenuComponent } from './shared/sub-menu/sub-menu.component';
import { WhatsappComponent } from './buttons/whatsapp/whatsapp.component';
import { ChatbotComponent } from './buttons/chatbot/chatbot.component';
import { ChatbotButtonComponent } from './buttons/chatbot-button/chatbot-button.component';
import { RopaComponent } from './categorias/ropa/ropa.component';
import { PisosComponent } from './categorias/pisos/pisos.component';
import { SuperficiesComponent } from './categorias/superficies/superficies.component';
import { EspecialidadesComponent } from './categorias/especialidades/especialidades.component';
import { MirachemComponent } from './categorias/mirachem/mirachem.component';
import { LoaderComponent } from './shared/loader/loader.component';
import { AvisoPrivacidadComponent } from './pages/aviso-privacidad/aviso-privacidad.component';
import { RegresarComponent } from './buttons/regresar/regresar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    InicioComponent,
    NosotrosComponent,
    ProductoComponent,
    BuscarComponent,
    AgregarCarritoComponent,
    PruebaListarMysqlComponent,
    PruebaEditarProdComponent,
    CarritoDespComponent,
    BolsaTrabajoComponent,
    SucursalesComponent,
    ContactanosComponent,
    GuardarProductoComponent,
    IngresarProductoComponent,
    AdminInicioComponent,
    AdminComponent,
    LoginComponent,
    HeaderNewComponent,
    CheckoutComponent,
    DirEnvioComponent,
    ResumenComprasComponent,
    SubMenuComponent,
    WhatsappComponent,
    ChatbotComponent,
    ChatbotButtonComponent,
    RopaComponent,
    PisosComponent,
    SuperficiesComponent,
    EspecialidadesComponent,
    MirachemComponent,
    LoaderComponent,
    AvisoPrivacidadComponent,
    RegresarComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
