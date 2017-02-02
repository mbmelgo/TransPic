import React from 'react';
import SearchResult from '../containers/searchresult.js';

class Adminhome extends React.Component {
  constructor(props) {
    super(props);
  }

  signout() {
    const {signoutUser} = this.props;
    signoutUser();
  }

  selectWordOption() {
    const {LocalState} = this.props;
    LocalState.set({wordSelected:true});
  }

  selectCategoryOption() {
    const {LocalState} = this.props;
    LocalState.set({wordSelected:false});
  }

  searchItem(){
    const {LocalState} = this.props;
    const {selectLangauge,searchItem} = this.refs;
    var searchLanguage = "english";
    var wordSelected = true;
    if (selectLangauge.value != "false") {
      searchLanguage = selectLangauge.value;
    }
    if (!LocalState.get('wordSelected')) {
      wordSelected = false;
    }
    LocalState.set({
      searchLanguage: searchLanguage,
      searchItem: searchItem.value,
      wordSelected: wordSelected
    });
  }

  render() {
    const {results, LocalState} = this.props;
    return (
      <div id="outer">
        <nav className="navbar navbar-default" >
          <div className="container-fluid">
            <div className="navbar-header" id="nav-header">
              <a className="navbar-brand" href="#" id="nav-out">
                <img alt="Brand" src="https://s10.postimg.org/b9n3rh4rt/Logo_Makr.png" id="brandLogo"/>
              </a>
              <button type="button" className="btn btn-success navbar-btn pull-right" id='lgbtn' onClick={this.signout.bind(this)}>LOGOUT</button>
              </div>
          </div>
        </nav>
        <div id="innerSignup">
          <div className="col-lg-4" id="topbar">
            <div className="input-group">
              <input type="text" className="form-control" placeholder="Search for..." ref="searchItem"/>
              <span className="input-group-btn">
                <button className="btn btn-default" type="button" onClick={this.searchItem.bind(this)}>
                  <span className="glyphicon glyphicon-search" aria-hidden="true"> Search</span>
                </button>
              </span>
            </div>
          </div>
          <form className="form-group col-lg-2" id="searchOpt">
           <fieldset className="row form-group">
             <div className="form-check">
              <label className="radio-inline form-check-label" id='labelCategory'>
                <input type="radio" className="form-check-input" name="searchOptions" id="categoryOption" value="category"  onClick={this.selectCategoryOption.bind(this)} defaultChecked/>
                Category
              </label>
             <label className="radio-inline form-check-label" id='labelCategory'>
               <input type="radio" className="form-check-input" name="searchOptions" id="wordOption" value="word" onClick={this.selectWordOption.bind(this)}/>
               Word
             </label>
           </div>
           </fieldset>
         </form>
        <div className="col-lg-4" id="topbar">
          <select id='selectLangauge' ref='selectLangauge' className='selectpicker form-control' id='form-control'>
           <option value="false">Select Language</option>           <option value="afrikaans">Afrikaans</option>              <option value="albanian">Albanian</option>
           <option value="amharic">Amharic</option>                 <option value="arabic">Arabic</option>                    <option value="aramaniac">Aramaniac</option>
           <option value="armenian">Armenian</option>               <option value="assamese">Assamese</option>                <option value="aymara">Aymara</option>
           <option value="azerbaijani">Azerbaijani</option>         <option value="balochi">Balochi</option>                  <option value="bamanankan">Bamanankan</option>
           <option value="bashkort">Bashkort</option>               <option value="basque">Basque</option>                    <option value="belarusan">Belarusan</option>
           <option value="bengali">Bengali</option>                 <option value="bhojpuri">Bhojpuri</option>                <option value="bislama">Bislama</option>
           <option value="bosnian">Bosnian</option>                 <option value="brahui">Brahui</option>                    <option value="bulgarian">Bulgarian</option>
           <option value="burmese">Burmese</option>                 <option value="cantonese">Cantonese</option>              <option value="catalan">Catalan</option>
           <option value="cebuano">Cebuano</option>                 <option value="chechen">Chechen</option>                  <option value="cherokee">Cherokee</option>
           <option value="croatian">Croatian</option>               <option value="czech">Czech</option>                      <option value="dakota">Dakota</option>
           <option value="danish">Danish</option>                   <option value="dari">Dari</option>                        <option value="dholuo">Dholuo</option>
           <option value="dutch">Dutch</option>                     <option value="english">English</option>                  <option value="esperanto">Esperanto</option>
           <option value="estonian">Estonian</option>               <option value="éwé">Éwé</option>                          <option value="finnish">Finnish</option>
           <option value="french">French</option>                   <option value="georgian">Georgian</option>                <option value="german">German</option>
           <option value="gikuyu">Gikuyu</option>                   <option value="greek">Greek</option>                      <option value="guarani">Guarani</option>
           <option value="gujarati">Gujarati</option>               <option value="haitianCreole">Haitian Creole</option>     <option value="hausa">Hausa</option>
           <option value="hawaiian">Hawaiian</option>               <option value="hawaiianCreole">Hawaiian Creole</option>   <option value="hebrew">Hebrew</option>
           <option value="hiligaynon">Hiligaynon</option>           <option value="hindi">Hindi</option>                      <option value="hungarian">Hungarian</option>
           <option value="icelandic">Icelandic</option>             <option value="igbo">Igbo</option>                        <option value="ilocano">Ilocano</option>
           <option value="indonesian">Indonesian</option>           <option value="inuit">Inuit</option>                      <option value="irishGaelic">Irish Gaelic</option>
           <option value="italian">Italian</option>                 <option value="kiche">K'iche'</option>                    <option value="kabyle">Kabyle</option>
           <option value="kannada">Kannada</option>                 <option value="kashmiri">Kashmiri</option>                <option value="kazakh">Kazakh</option>
           <option value="kmer">Kmer</option>                       <option value="khoekhoe">Khoekhoe</option>                <option value="korean">Korean</option>
           <option value="kurdish">Kurdish</option>                 <option value="kyrgyz">Kyrgyz</option>                    <option value="lao">Lao</option>
           <option value="latin">Latin</option>                     <option value="latvian">Latvian</option>                  <option value="lingala">Lingala</option>
           <option value="lithuanian">Lithuanian</option>           <option value="macedonian">Macedonian</option>            <option value="maithili">Maithili</option>
           <option value="malagasy">Malagasy</option>               <option value="malay">Malay</option>                      <option value="malayalam">Malayalam</option>
           <option value="mandarin">Mandarin</option>               <option value="marathi">Marathi</option>                  <option value="mende">Mende</option>
           <option value="mongolian">Mongolian</option>             <option value="nahuatl">Nahuatl</option>                  <option value="navajo">Navajo</option>
           <option value="nepali">Nepali</option>                   <option value="norwegian">Norwegian</option>              <option value="ojibwa">Ojibwa</option>
           <option value="oriya">Oriya</option>                     <option value="oromo">Oromo</option>                      <option value="pashto">Pashto</option>
           <option value="persian">Persian</option>                 <option value="polish">Polish</option>                    <option value="portuguese">Portuguese</option>
           <option value="punjabi">Punjabi</option>                 <option value="quechua">Quechua</option>                  <option value="romani">Romani</option>
           <option value="romanian">Romanian</option>               <option value="russian">Russian</option>                  <option value="rwanda">Rwanda</option>
           <option value="samoan">Samoan</option>                   <option value="sanskrit">Sanskrit</option>                <option value="serbian">Serbian</option>
           <option value="shona">Shona</option>                     <option value="sindhi">Sindhi</option>                    <option value="sinhala">Sinhala</option>
           <option value="slovak">Slovak</option>                   <option value="slovene">Slovene</option>                  <option value="somali">Somali</option>
           <option value="spanish">Spanish</option>                 <option value="swahili">Swahili</option>                  <option value="swedish">Swedish</option>
           <option value="tachelhit">Tachelhit</option>             <option value="tagalog">Tagalog</option>                  <option value="tajiki">Tajiki</option>
           <option value="tamil">Tamil</option>                     <option value="tatar">Tatar</option>                      <option value="telugu">Telugu</option>
           <option value="thai">Thai</option>                       <option value="tibetic">Tibetic</option>                  <option value="tigrigna">Tigrigna</option>
           <option value="tokPisin">Tok Pisin</option>              <option value="turkish">Turkish</option>                  <option value="turkmen">Turkmen</option>
           <option value="ukrainian">Ukrainian</option>             <option value="urdu">Urdu</option>                        <option value="uyghur">Uyghur</option>
           <option value="uzbek">Uzbek</option>                     <option value="vietnamese">Vietnamese</option>            <option value="warlpiri">Warlpiri</option>
           <option value="welsh">Welsh</option>                     <option value="wolof">Wolof</option>                      <option value="xhosa">Xhosa</option>
           <option value="yakut">Yakut</option>                     <option value="yiddish">Yiddish</option>                  <option value="yoruba">Yoruba</option>
           <option value="yucatec">Yucatec</option>                 <option value="zapotec">Zapotec</option>                  <option value="zulu">Zulu</option>
          </select>
        </div>
        { LocalState.get("wordSelected") ?
          <button type="button" className="btn btn-primary navbar-btn pull-right col-lg-2" id='optbtn' >Add New Word</button>
        : <button type="button" className="btn btn-primary navbar-btn pull-right col-lg-2" id='optbtn' >Add New Category</button>
        }
        </div>
        <SearchResult searchItem={LocalState.get('searchItem')} searchLanguage={LocalState.get('searchLanguage')} wordSelected={LocalState.get('wordSelected')}/>
      </div>
    );
  }
}

export default Adminhome;
