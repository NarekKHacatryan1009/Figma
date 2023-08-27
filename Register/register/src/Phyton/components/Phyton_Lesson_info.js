import React from 'react'
import { lesson } from '../helpers/phyton_info'
import { reg } from '../helpers/phyton_reg'

export default function Lesson_info() {
  return (
    <div className='lesson_info'>
        <div className='info'>
            <div className='for_info'>  
                    <div>
                        {
                            lesson.map( less =>
                                <div className='lesson_information' key={less.id}>
                                
                                    <div className='title'>
                                        {less.lesstitle}
                                    </div>

                                    <div className='start'>
                                        {less.lessstart}
                                    </div>
                                
                                    <div className='stages'>
                                        {less.lessstages}
                                    </div>
                                
                                    <div className='names'>
                                        {less.lessnames}
                                    </div>
                                
                                    <div className='duration '>
                                        {less.lessduration}
                                    </div>
                                
                                    <div className='certificate'>
                                        {less.lesscertificate}
                                    </div>
                                
                                    <div className='payment'>
                                        {less.lesspayment}
                                    </div>

                                    <div className='info1'>
                                        {less.lessinfo}
                                    </div>

                                </div>
                            )
                        }
                </div>
            </div>
        </div>

        <div className='register'>
            <div className='for_text'>
                <div className='text'>
                    <p>ԳՐԱՆՑՎԵԼ ԴԱՍԸՆԹԱՑԻՆ</p>
                </div>


                 <div className='register2'>
                    
                        <div className='register3' key={reg.id}>
                                
                        <input type='text' className='name' placeholder={reg[0].name} />
                            
                        <input type='text' className='name' placeholder={reg[1].surname} />
                            
                        <input type='text' className='name' placeholder={reg[2].email} />
                    
                        <input type='text' className='name' placeholder={reg[3].number} />

                        <button className='btn1'>Գրանցվել</button>

                    </div>    
                    
                </div>           
            </div>
        </div>
    </div>
  )
}   