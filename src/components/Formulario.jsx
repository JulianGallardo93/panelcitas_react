import { useState, useEffect} from 'react';
import Error from './Error'

const Formulario = ({pacientes, setPacientes, paciente, setPaciente}) => {

    const [nombre, setNombre] = useState('');
    const [propietario, setPropietario] = useState('');
    const [email, setEmail] = useState('');
    const [numero, setNumero] = useState('');
    const [sintomas, setSintomas] = useState('');
    const [fecha, setFecha] = useState('');

    const [error, setError] = useState(false)

    useEffect(() => {
      if( Object.keys(paciente).length > 0 ){
        setNombre(paciente.nombre)
        setPropietario(paciente.propietario)
        setEmail(paciente.email)
        setNumero(paciente.numero)
        setSintomas(paciente.sintomas)
        setFecha(paciente.fecha)
      }
    }, [paciente])

    const generarId = () => {
      const random = Math.random().toString(36).slice(2);
      const fecha = Date.now().toString(36)

      return random + fecha
    }

    const handleSubmit = (e) => {
      e.preventDefault();

      // Validación del Formulario
      if( [ nombre, propietario, email, fecha, sintomas ].includes('') ) {
          console.log('Hay Al Menos un campo vacio')

          setError(true)
          return;
      } 
      
      setError(false)


      // Objeto de Paciente
      const objetoPaciente = {
          nombre, 
          propietario, 
          email,
          numero, 
          fecha, 
          sintomas
      }

      if(paciente.id) {
          // Editando el Registro
          objetoPaciente.id = paciente.id
          const pacientesActualizados = pacientes.map( pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState )

          setPacientes(pacientesActualizados)
          setPaciente({})

      } else {
          // Nuevo registro
          objetoPaciente.id = generarId();
          setPacientes([...pacientes, objetoPaciente]);
      }

        //reiniciar formulario

        setNombre('')
        setPropietario('')
        setEmail('')
        setNumero('')
        setSintomas('')
        setFecha('')
    }

  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">Seguimeinto Pacientes</h2>

      <p className="text-lg mt-5 text-center mb-10">
        Añade Pacientes y {''}
        <span className="text-indigo-600 font-bold">Administrar</span>
      </p>

      <form 
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10 mx-5"
        >

            { error && <Error><p>Todos los campos son obligatorios</p></Error>}

        <div className="mb-5">
          <label htmlFor="mascota" 
          className="block text-gray-700 uppercase font-bold">
          Nombre Mascota
          </label>

          <input id="mascota" 
          type="text" 
          className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
          placeholder="Nombre de la Mascota"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label htmlFor="nombre" 
          className="block text-gray-700 uppercase font-bold">
          Nombre Propietario
          </label>

          <input id="nombre" 
          type="text" 
          className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
          placeholder="Nombre del Propietario"
          value={propietario}
          onChange={(e) => setPropietario(e.target.value)}
          />
        </div>
    
        <div className="mb-5">
          <label htmlFor="email" 
          className="block text-gray-700 uppercase font-bold">
          Tu Email
          </label>

          <input id="email" 
          type="email" 
          className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
          placeholder="Tu Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label htmlFor="telefono" 
          className="block text-gray-700 uppercase font-bold">
          Numero de Contacto
          </label>

          <input id="telefono" 
          type="num" 
          className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
          placeholder="Tu Telefono"
          value={numero}
          onChange={(e) => setNumero(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label htmlFor="sintomas" 
          className="block text-gray-700 uppercase font-bold">
          Sintomas de la Mascota
          </label>

          <textarea id="sintomas" 
          type="text" 
          className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
          placeholder="Describe los sintomas"
          value={sintomas}
          onChange={(e) => setSintomas(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label htmlFor="alta" 
          className="block text-gray-700 uppercase font-bold">
          Fecha de Alta
          </label>

          <input id="alta" 
          type="date" 
          className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          value={fecha}
          onChange={ (e) => setFecha(e.target.value) }
          />
        </div>

        <input type="submit" 
        className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all rounded" 
        value={ paciente.id ? 'Editar paciente' : 'Agregar Paciente'}
        />

      </form>
    </div>
  )
}

export default Formulario
