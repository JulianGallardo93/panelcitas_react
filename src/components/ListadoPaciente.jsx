
import Paciente from "./Paciente"


const ListadoPaciente = ({pacientes, setPaciente, eliminarPaciente}) => {

  return (
    
      <div className="md:w-1/2 lg:w-3/5 md:overflow-y-scroll h-screen">

        {pacientes && pacientes.length ? (
          <>
          <h2 className="font-black text-3xl text-center">Listado pacientes</h2>
          <p className="text-xl mt-5 mb-10 text-center">Administra tus {''} <span className="text-indigo-600 font-bold">Pacientes y Citas</span></p>
  
          
          { pacientes.map ( paciente => (
            <Paciente 
              key={paciente.id}
              paciente={paciente}
              setPaciente={setPaciente}
              eliminarPaciente={eliminarPaciente}
            />
          ))}

          </>
        ) : (

          <>
            <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
            <p className="text-xl mt-5 mb-10 text-center">Comienza Agregando los Pacientes {''} <span className="text-indigo-600 font-bold">y Administralos</span></p>
          </>
        )}

        

        

      </div>

      
    
  )
}

export default ListadoPaciente
