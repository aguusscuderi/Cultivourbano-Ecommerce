
export default function CartForm (props) {

    return(
    <div className="buying-form-div">
        <h2> Completa tus datos y finaliza tu compra! </h2>
        <form className="buying-form" action="" onSubmit={props.handleSubmit}>
                <div class="name-input">
                    <label for="name"> Nombre: </label>
                    <input placeholder="Ingresa tu nombre" type="text" id="name" name="nombre" required pattern="^[a-zA-Z]+(?:\s?[a-zA-z]+)+" onChange={props.handleChange}/>
                    <p style={{'font-size': '12px'}}>Su NOMBRE solo debe contener caracteres.</p>
                </div>

                <div class="surname-input">
                    <label for="surname"> Apellido: </label>
                    <input placeholder="Ingresa tu apellido" type="text" id="surname" name="apellido" required pattern="^[a-zA-Z]+(?:\s?[a-zA-z]+)+" onChange={props.handleChange}/>
                    <p style={{'font-size': '12px'}}>Su APELLIDO solo debe contener caracteres.</p>
                </div>

                <div class="dni-input">
                    <label for="dni"> DNI: </label>
                    <input placeholder="DNI" type="number" id="dni" name="dni" required onChange={props.handleChange}/>
                </div>

                <div class="email-input">
                    <label for="email"> Email: </label>
                    <input  placeholder="example@email.com" type="email" id="email" name="email" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" onChange={props.handleChange}/>
                </div>

                <div class="phoneNumber-input">
                    <label for="number"> Telefono: </label>
                    <input placeholder="Telefono" type="number" id="number" name="telefono" required onChange={props.handleChange}/>
                </div>

                <div class="address-input">
                    <label for="text"> Direccion: </label>
                    <input placeholder="Direccion" type="text" id="text" name="direccion" required onChange={props.handleChange}/>
                </div>

                <button type="submit"> Finalizar compra </button>
        </form>
    </div>   
    )
}