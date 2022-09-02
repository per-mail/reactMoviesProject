import React from 'react'
function Movie (props) {
// в переменную const вносим заголовки с json файла и изменяем их imdbID: id,
    const {
        Title: title,
        Year: year,
        imdbID: id,
        Type: type,
        Poster: poster    
    } = props;
    
    console.log('movie render')
    
    return  <div id={id} className="card movie">
        <div className="card-image waves-effect waves-block waves-light">
        {/* отфильтровываем карточки без картинок, у которых значение  poster = 'N/A' */}
           {
             poster === 'N/A' ? 
        // берём картинку с сайта placeholder в качестве текста будет выводится заголовок title
  // 
                    <img classNme="activator" src={`httpp://via.placeholder.com/300x500?text=${title}`} 
                    />
                    :
                    <img className="activator" src={poster} />
           }
    </div>
    {/* выводим данные из const  */}
    <div className="card-content">
      <span className="card-title activator grey-text text-darken-4">{title}</span>
      <p>{year} <span className="right">{type}</span></p>
    </div>
  </div>   

}

export {Movie}
          