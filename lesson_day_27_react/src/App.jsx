import Image from './components/image'
import HeaderLine from './components/HeaderLine'
import ProfileIcon from './components/ProfileInfo'

function App() {

  return (
   <div className='flex justify-center items-center h-screen bg-gray-200'>
       <div className='bg-white p-6 rounded-lg shadow-lg max-w-sm '>
       <Image/>
       <HeaderLine/>
       <ProfileIcon/>
    </div>
   </div>
  )
}

export default App
