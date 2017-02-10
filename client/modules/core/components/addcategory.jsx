import React from 'react';

class Addcategory extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillUnmount(){
    const {clearAddCategoryErrors} = this.props;
    clearAddCategoryErrors();
  }

  signout() {
    const {signoutUser} = this.props;
    signoutUser();
  }

  goBackHome(){
    const {goBackHome} = this.props;
    goBackHome();
  }

  addCategory(){
    const {addCategory,image} = this.props;
    const {afrikaans,albanian,amharic,arabic,aramaniac,armenian,assamese,aymara,azerbaijani,balochi,
    bamanankan,bashkort,basque,belarusan,bengali,bhojpuri,bislama,bosnian,brahui,bulgarian,
    burmese,cantonese,catalan,cebuano,chechen,cherokee,croatian,czech,dakota,danish,dari,
    dholuo,dutch,english,esperanto,estonian,ewe,finnish,french,georgian,german,gikuyu,
    greek,guarani,gujarati,haitianCreole,hausa,hawaiian,hawaiianCreole,hebrew,hiligaynon,hindi,
    hungarian,icelandic,igbo,ilocano,indonesian,inuit,irishGaelic,italian,kiche,kabyle,kannada,
    kashmiri,kazakh,kmer,khoekhoe,korean,kurdish,kyrgyz,lao,latin,latvian,lingala,lithuanian,
    macedonian,maithili,malagasy,malay,malayalam,mandarin,marathi,mende,mongolian,nahuatl,navajo,nepali,
    norwegian,ojibwa,oriya,oromo,pashto,persian,polish,portuguese,punjabi,quechua,romani,romanian,
    russian,rwanda,samoan,sanskrit,serbian,shona,sindhi,sinhala,slovak,slovene,somali,spanish,swahili,
    swedish,tachelhit,tagalog,tajiki,tamil,tatar,telugu,thai,tibetic,tigrigna,tokPisin,turkish,turkmen,
    ukrainian,urdu,uyghur,uzbek,vietnamese,warlpiri,welsh,wolof,xhosa,yakut,yiddish,yoruba,yucatec,
    zapotec,zulu} = this.refs;
    const formData = {
      image: image,
      afrikaans: afrikaans.value,
      albanian: albanian.value,
      amharic: amharic.value,
      arabic: arabic.value,
      aramaniac: aramaniac.value,
      armenian: armenian.value,
      assamese: assamese.value,
      aymara: aymara.value,
      azerbaijani: azerbaijani.value,
      balochi: balochi.value,
      bamanankan: bamanankan.value,
      bashkort: bashkort.value,
      basque: basque.value,
      belarusan: belarusan.value,
      bengali: bengali.value,
      bhojpuri: bhojpuri.value,
      bislama: bislama.value,
      bosnian: bosnian.value,
      brahui: brahui.value,
      bulgarian: bulgarian.value,
      burmese: burmese.value,
      cantonese: cantonese.value,
      catalan: catalan.value,
      cebuano: cebuano.value,
      chechen: chechen.value,
      cherokee: cherokee.value,
      croatian: croatian.value,
      czech: czech.value,
      dakota: dakota.value,
      danish: danish.value,
      dari: dari.value,
      dholuo: dholuo.value,
      dutch: dutch.value,
      english: english.value,
      esperanto: esperanto.value,
      estonian: estonian.value,
      ewe: ewe.value,
      finnish: finnish.value,
      french: french.value,
      georgian: georgian.value,
      german: german.value,
      gikuyu: gikuyu.value,
      greek: greek.value,
      guarani: guarani.value,
      gujarati: gujarati.value,
      haitianCreole: haitianCreole.value,
      hausa: hausa.value,
      hawaiian: hawaiian.value,
      hawaiianCreole: hawaiianCreole.value,
      hebrew: hebrew.value,
      hiligaynon: hiligaynon.value,
      hindi: hindi.value,
      hungarian: hungarian.value,
      icelandic: icelandic.value,
      igbo: igbo.value,
      ilocano: ilocano.value,
      indonesian: indonesian.value,
      inuit: inuit.value,
      irishGaelic: irishGaelic.value,
      italian: italian.value,
      kiche: kiche.value,
      kabyle: kabyle.value,
      kannada: kannada.value,
      kashmiri: kashmiri.value,
      kazakh: kazakh.value,
      kmer: kmer.value,
      khoekhoe: khoekhoe.value,
      korean: korean.value,
      kurdish: kurdish.value,
      kyrgyz: kyrgyz.value,
      lao: lao.value,
      latin: latin.value,
      latvian: latvian.value,
      lingala: lingala.value,
      lithuanian: lithuanian.value,
      macedonian: macedonian.value,
      maithili: maithili.value,
      malagasy: malagasy.value,
      malay: malay.value,
      malayalam: malayalam.value,
      mandarin: mandarin.value,
      marathi: marathi.value,
      mende: mende.value,
      mongolian: mongolian.value,
      nahuatl: nahuatl.value,
      navajo: navajo.value,
      nepali: nepali.value,
      norwegian: norwegian.value,
      ojibwa: ojibwa.value,
      oriya: oriya.value,
      oromo: oromo.value,
      pashto: pashto.value,
      persian: persian.value,
      polish: polish.value,
      portuguese: portuguese.value,
      punjabi: punjabi.value,
      quechua: quechua.value,
      romani: romani.value,
      romanian: romanian.value,
      russian: russian.value,
      rwanda: rwanda.value,
      samoan: samoan.value,
      sanskrit: sanskrit.value,
      serbian: serbian.value,
      shona: shona.value,
      sindhi: sindhi.value,
      sinhala: sinhala.value,
      slovak: slovak.value,
      slovene: slovene.value,
      somali: somali.value,
      spanish: spanish.value,
      swahili: swahili.value,
      swedish: swedish.value,
      tachelhit: tachelhit.value,
      tagalog: tagalog.value,
      tajiki: tajiki.value,
      tamil: tamil.value,
      tatar: tatar.value,
      telugu: telugu.value,
      thai: thai.value,
      tibetic: tibetic.value,
      tigrigna: tigrigna.value,
      tokPisin: tokPisin.value,
      turkish: turkish.value,
      turkmen: turkmen.value,
      ukrainian: ukrainian.value,
      urdu: urdu.value,
      uyghur: uyghur.value,
      uzbek: uzbek.value,
      vietnamese: vietnamese.value,
      warlpiri: warlpiri.value,
      welsh: welsh.value,
      wolof: wolof.value,
      xhosa: xhosa.value,
      yakut: yakut.value,
      yiddish: yiddish.value,
      yoruba: yoruba.value,
      yucatec: yucatec.value,
      zapotec: zapotec.value,
      zulu: zulu.value
    }
    addCategory(formData);
  }

  addImage(e){
    e.preventDefault();
    const {addImage} = this.props;
    const {image} = this.refs;
    addImage(image.files[0]);
  }

  removeImage(e){
    e.preventDefault();
    const {removeImage} = this.props;
    const {image} = this.refs;
    image.value = '';
    removeImage();
  }

  render() {
    const {error,translationLanguages,image} = this.props;
    return (
      <div id="outer">
        <nav className="navbar navbar-default" >
          <div className="container-fluid">
            <div className="navbar-header" id="nav-header">
              <a className="navbar-brand" href="#" id="nav-out">
                <img alt="Brand" src="/images/logo.png" id="brandLogo"/>
              </a>
              <button type="button" className="btn btn-success navbar-btn pull-right" id='lgbtn' onClick={this.signout.bind(this)}>LOGOUT</button>
              </div>
          </div>
        </nav>
        <div id="addBox">
          <div className="panel panel-success" id="addPopOut">
            <div className="panel-heading">
              <h3 className="panel-title">Add New Category</h3>
            </div>
            <div className="panel-body">
              {error ? Bert.alert( error, 'danger', 'fixed-top', 'fa-frown-o' ):""}
              <div className='form-group col-md-6' id="verticalLine">
                <div className="row">
                  <div className="col-sm-12 col-md-12">
                    {image ? <a className='pull-right' onClick={this.removeImage.bind(this)}><span className="glyphicon glyphicon-remove-sign" aria-hidden="true" id='closebtn'></span></a>
                    : <a className='pull-right'></a>}
                    <div className="thumbnail" id="imageThmbnail">
                      {image ?
                      <img className="img-rounded" src={image} alt="..." id='image'/>
                      :<img className="img-rounded" src="/images/no_image.jpg" alt="..." id='image'/>
                      }
                    </div>
                    <label type="button" className="btn btn-info btn-file" id='addImage' >Add Image<input type="file" ref='image' onChange={this.addImage.bind(this)}/></label>
                  </div>
                </div>
              </div>
              <div className='form-group col-md-6' id="third">
                <div className="row" >
                  <div className="col-sm-12 col-md-12" >
                    <h5>Please enter category name atleast 1 translation below:</h5>
                    <form className='form-group col-md-12' >
                      <fieldset id="addTranslationFormGroup">
                          {translationLanguages.map(function(language){
                            return (
                              <div className="form-group" key={language._id}>
                                <label className='col-sm-3 control-label' htmlFor='english' id='labelAddTranslation' >{language.name}:</label>
                                <div className='col-sm-8' id="inputAddTranslation">
                                  <input ref={language._id} name={language._id} type='text' placeholder='' className='form-control' id='form-control'/>
                                </div><br/><br/>
                              </div>
                            )
                          })}
                      </fieldset>
                    </form>
                  </div>
                </div>
              </div>
              <br/><br/>
              <button type="button" className="btn btn-primary navbar-btn pull-right" id='btn' onClick={this.addCategory.bind(this)}>Save</button>
              <button type="button" className="btn btn-primary navbar-btn pull-right" id='btn' onClick={this.goBackHome.bind(this)}>Cancel</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Addcategory;
