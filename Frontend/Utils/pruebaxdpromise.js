import "functions.js"
import swal from 'sweetalert2'

const msjCrear = function (url, objeto) {
    return new Promise(

        function (resolve, reject) {
            procesando();
            axios.post(url, objeto)
                .then(({ status, data }) => {
                    swal.fire({
                        icon: 'success',
                        title: "Creado Correctamente",
                        showConfirmButton: true
                    })
                    resolve(data);
                })
                .catch((err) => {
                    console.log(err.response.status);
                    let texto = '';
                    texto = switchF(err.response.status);
                    swal.fire({
                        title: "Error",
                        text: texto,
                        icon: "error"
                    }).then(() => reject(err))
                })
        })
}

const msjEliminar = function (url, objeto) {
    return new Promise(
        function (resolve, reject) {
            swal.fire({
                title: 'Eliminar?',
                icon: 'warning',
                showCancelButton: true,
                cancelButtonText: 'No',
                confirmButtonText: 'Si',
                showLoaderOnConfirm: true,
                preConfirm(login) {
                    return axios.post(url, objeto)
                        .then((res) => {
                            return res
                        }).catch((err) => {
                            return err
                        })
                }
            }).then(({ value }) => {

                if (value.hasOwnProperty('response')) {
                    throw value
                }
                const { status, data } = value;

                swal.fire({
                    icon: 'success',
                    title: "Actualizado correctamente",
                    text: 'Tus datos han sido actualizados',
                    showConfirmButton: true
                })
                resolve(data);
            }).catch((err) => {

                if (err.hasOwnProperty('value')) {
                    err = err.value;
                }
                console.log(err.response.status)
                let texto = '';
                texto = switchF(err.response.status);
                swal.fire({
                    title: "Error",
                    text: texto,
                    icon: "error"
                }).then(() => reject(err))
            })
        })
}

const msjActualizar = function (url, objeto) {
    return new Promise(
        function (resolve, reject) {
            swal.fire({
                title: 'Actualizar?',
                icon: 'warning',
                showCancelButton: true,
                cancelButtonText: 'No',
                confirmButtonText: 'Si',
                showLoaderOnConfirm: true,
                preConfirm(login) {
                    return axios.post(url, objeto)
                        .then((res) => {
                            return res
                        }).catch((err) => {
                            console.log(err);
                            return err
                        })
                }
            }).then(({ value }) => {

                if (value.hasOwnProperty('response')) {
                    throw value;
                }
                const { status, data } = value;

                swal.fire({
                    icon: 'success',
                    title: "Actualizado correctamente",
                    text: 'Tus datos han sido actualizados',
                    showConfirmButton: true
                })
                resolve(data);
            }).catch((err) => {

                if (err.hasOwnProperty('value')) {
                    err = err.value;
                }
                console.log(err.response.status);
                let texto = '';
                texto = switchF(err.response.status);
                swal.fire({
                    title: "Error",
                    text: texto,
                    icon: "error"
                }).then(() => reject(err))
            })
        })
}
