const parseByTag = (tag, searchStr) => {
  const regexTagMatch = new RegExp(`<${tag}>(.+)<\/${tag}>`)

  return searchStr.match(regexTagMatch);
}

const catalog = (s, article) => {
  const parsedTagString = s.split('\n\n');
  const allInfo = {};

  parsedTagString.forEach((stringWithTags, index) => {
    const name = parseByTag('name', stringWithTags);
    const prx = parseByTag('prx', stringWithTags);
    const qty = parseByTag('qty', stringWithTags);
    if (!name || !prx || !qty) {
      allInfo['null'] = 1
    } else {
      if (allInfo[name[1]]) {
        allInfo[name[1] + index] = {
          prx: prx[1],
          qty: qty[1],
        }
      } else {
        allInfo[name[1]] = {
          prx: prx[1],
          qty: qty[1],
        }
      }
    }
  })

  const allKeys = Object.keys(allInfo).filter((key) => key.includes(article))

  if (allKeys.length === 0) {
    return 'Nothing';
  } else if (allKeys.length === 1) {
    if (allInfo[article].prx && allInfo[article].qty) {
      return `${article} > prx: $${allInfo[article].prx} qty: ${allInfo[article].qty}`;
    }
  } else {
    let resultStr = ''
    allKeys.forEach((key) => {
      resultStr += `${key.replace(/[0-9]/g, '')} > prx: $${allInfo[key].prx} qty: ${allInfo[key].qty}\r\n`
    })
    return resultStr.substring(0, resultStr.length - 2)
  }
}

const s = `<prod><name>drill</name><prx>99</prx><qty>5</qty></prod>

<prod><name>hammer</name><prx>10</prx><qty>50</qty></prod>

<prod><name>screwdriver</name><prx>5</prx><qty>51</qty></prod>

<prod><name>table saw</name><prx>1099.99</prx><qty>5</qty></prod>

<prod><name>saw</name><prx>9</prx><qty>10</qty></prod>

<prod><name>chassssir</name><prx>100</prx><qty>20</qty></prod>

<prod><name>fan</name><prx>50</prx><qty>8</qty></prod>

<prod><name>chair</name><prx>10.8</prx><qty>15</qty></prod>

<prod><name>battery</name><prx>150</prx><qty>12</qty></prod>

<prod><name>pallet</name><prx>10</prx><qty>50</qty></prod>

<prod><name>wheel</name><prx>8.80</prx><qty>32</qty></prod>

<prod><name>extractor</name><prx>105</prx><qty>17</qty></prod>

<prod><name>bumper</name><prx>150</prx><qty>3</qty></prod>

<prod><name>ladder</name><prx>112</prx><qty>12</qty></prod>

<prod><name>hoist</name><prx>13.80</prx><qty>32</qty></prod>

<prod><name>platform</name><prx>65</prx><qty>21</qty></prod>

<prod><name>car wheel</name><prx>505</prx><qty>7</qty></prod>

<prod><name>bicycle wheel</name><prx>150</prx><qty>11</qty></prod>

<prod><name>big hammer</name><prx>18</prx><qty>12</qty></prod>

<prod><name>saw for metal</name><prx>13.80</prx><qty>32</qty></prod>

<prod><name>wood pallet</name><prx>65</prx><qty>21</qty></prod>

<prod><name>circular fan</name><prx>80</prx><qty>8</qty></prod>

<prod><name>exhaust fan</name><prx>62</prx><qty>8</qty></prod>

<prod><name>window fan</name><prx>62</prx><qty>8</qty></prod>`

console.log(catalog(s, 'chair'));
