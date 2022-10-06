import swal from 'sweetalert2';



export class Alerta {
  public mensajeCorrecto(info: any) {
  
    swal.fire({
      icon: 'success',
      title: 'Correcto',
      html: info,
      showConfirmButton: true,
      allowOutsideClick: false,
      allowEscapeKey: false,
      confirmButtonText: 'Aceptar',
    });
  }

  public mensajeInfo(info: any) {
    swal.fire({
      icon: 'info',
      title: 'Información',
      html: info,
      showConfirmButton: true,
      allowOutsideClick: false,
      allowEscapeKey: false,
      confirmButtonText: 'Aceptar',
    });
  }

  public mensajeError(info: any) {
    swal.fire({
      icon: 'error',
      title: 'Error',
      html: info,
      showConfirmButton: true,
      allowOutsideClick: false,
      allowEscapeKey: false,
      confirmButtonText: 'Aceptar',
    });
  }

  public mensajeWarning(info: any) {
    swal.fire({
      icon: 'warning',
      title: 'Advertencia',
      html: info,
      showConfirmButton: true,
      allowOutsideClick: false,
      allowEscapeKey: false,
      confirmButtonText: 'Aceptar',
    });
  }
}
