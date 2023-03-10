import React from 'react'

function CompAndMe ({shortView}) {
    if (shortView === true) {
       return <>
    <p>С компьютером я познакомился в середине 90-х. Уже учась в университете, занимался сборкой и настройкой ПК, и в планах было работать в этой сфере, но обстоятельства изменились.</p>
    
    
    </>
    } else {
        return <>
    <p>Мое первое знакомство с компьютером состоялось в середине 90-х, когда приехал в гости к дяде. Для меня это было нечто из далекого будущего и появилась мечта каким-либо образом связать свою жизнь с компьютерами. Учитывая, что проводником в новый мир был мой двоюродный брат, который младше меня на 6 лет, конечно же все начиналось с игр, но сопутствующие навыки и знания взаимодействия с компьютером я также получал.
    Все это помогло мне с легкостью освоить школьный курс информатики, но дальнейшее развитие в данном направлении в сельской местности было затруднительно.</p>
    <p>Более близкое знакомство с компьютерами состоялось во время учебы в университете. После занятий отправлялся на фирму дяди, где осуществлял сборку и настройку ПК (это мой первый заработок, хоть и небольшой), общался с профессионалами своего дела, что значительно облегчало освоение нового материала по интересующей теме.
    После университета я планировал начать работать на фирме, но не сложилось, к сожалению, она закрылась.</p>
    <p>Окончание университета, устройство на работу и рутина жизни сильно увели меня от цели. В 2011 году, когда я добрался до интернета, начал периодически искать источники в интернете с доступным изложением информации и практическими заданиями в свободном доступе, но ничего подходящего для себя не находил. В 2015 году я женился, появились другие приоритеты, и цель снова отошла на второй план.</p>
    
    </>
    }
}

export default CompAndMe