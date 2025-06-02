export interface productosMysql {
    id_producto?: string;
    nombre_producto?: string | undefined;
    clave_producto?: string ;
    categoria?: string | undefined ;
    portada_categoria?: string | undefined ;
    descripcion?: string ;
    descripcion_corta?: any ;
    precio?: number ;
    imagen_principal?: string ;
    imagen_portada?: string ;
    imagen_1?: string ;
    imagen_2?: string ;
    imagen_3?: string ;
    nombre_carpeta?: string ;
    cantidad?: number ;
    presentacion?: string;
    id_estatus?: number;
    variantes?: any;
    caracteristicas?: any;
    color?: any;
  }
