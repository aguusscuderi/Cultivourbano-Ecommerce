export default function CartForm (props) {
    return(
    <div className="buying-form-div">
        <h2> Completa tus datos y finaliza tu compra! </h2>
        <form className="buying-form" action="" onSubmit={props.handleSubmit}>
                <div class="name-input">
                    <label for="name"> Nombre: </label>
                    <input type="text" id="name" name="nombre" onChange={props.handleChange}/>
                </div>

                <div class="surname-input">
                    <label for="surname"> Apellido: </label>
                    <input type="text" id="surname" name="apellido" onChange={props.handleChange}/>
                </div>

                <div class="dni-input">
                    <label for="dni"> DNI: </label>
                    <input type="number" id="dni" name="dni" onChange={props.handleChange}/>
                </div>

                <div class="email-input">
                    <label for="email"> Email: </label>
                    <input type="email" id="email" name="email" onChange={props.handleChange}/>
                </div>

                <div class="phoneNumber-input">
                    <label for="number"> Telefono: </label>
                    <input type="number" id="number" name="telefono" onChange={props.handleChange}/>
                </div>

                <div class="phoneNumber-input">
                    <label for="text"> Direccion: </label>
                    <input type="text" id="text" name="direccion" onChange={props.handleChange}/>
                </div>

                <button type="submit"> Finalizar compra </button>
        </form>
    </div>   
    )
}