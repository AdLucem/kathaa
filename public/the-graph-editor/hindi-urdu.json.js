loadGraph({
    "properties": {},
    "inports": {},
    "outports": {},
    "groups": [],
    "processes": {
        "core/sentence_input_14mt": {
            "component": "core/sentence_input",
            "metadata": {
                "label": "Sentence Input",
                "x": 468,
                "y": 396,
                "width": 72,
                "height": 72,
                "progress": 100
            }
        },
        "hindi_urdu/tokenizer_zqf": {
            "component": "hindi_urdu/tokenizer",
            "metadata": {
                "label": "tokenizer",
                "x": 684,
                "y": 396,
                "width": 72,
                "height": 72,
                "progress": 100
            }
        },
        "hindi_urdu/utf2wx_6jt": {
            "component": "hindi_urdu/utf2wx",
            "metadata": {
                "label": "utf2wx",
                "x": 864,
                "y": 396,
                "width": 72,
                "height": 72,
                "progress": 100
            }
        },
        "hindi_urdu/morph_11rg": {
            "component": "hindi_urdu/morph",
            "metadata": {
                "label": "morph",
                "x": 1080,
                "y": 216,
                "width": 72,
                "height": 72,
                "progress": 100
            }
        },
        "hindi_urdu/postagger_xek": {
            "component": "hindi_urdu/postagger",
            "metadata": {
                "label": "postagger",
                "x": 1260,
                "y": 216,
                "width": 72,
                "height": 72,
                "progress": 100
            }
        },
        "hindi_urdu/pruning_1ik8": {
            "component": "hindi_urdu/pruning",
            "metadata": {
                "label": "pruning",
                "x": 1440,
                "y": 108,
                "width": 72,
                "height": 72,
                "progress": 100
            }
        },
        "hindi_panjabi/guessmorph_17z8": {
            "component": "hindi_panjabi/guessmorph",
            "metadata": {
                "label": "guessmorph",
                "x": 1620,
                "y": 108,
                "width": 72,
                "height": 72,
                "progress": 100
            }
        },
        "hindi_urdu/pickonemorph_wxc": {
            "component": "hindi_urdu/pickonemorph",
            "metadata": {
                "label": "pickonemorph",
                "x": 1800,
                "y": 108,
                "width": 72,
                "height": 72,
                "progress": 100
            }
        },
        "hindi_urdu/chunker_1436": {
            "component": "hindi_urdu/chunker",
            "metadata": {
                "label": "chunker",
                "x": 2124,
                "y": 252,
                "width": 72,
                "height": 72,
                "progress": 100
            }
        },
        "hindi_urdu/multiwordexpr_s86": {
            "component": "hindi_urdu/multiwordexpr",
            "metadata": {
                "label": "multiwordexpr",
                "x": 2124,
                "y": 0,
                "width": 72,
                "height": 72,
                "progress": 100
            }
        },
        "hindi_urdu/headcomputation_1vs4": {
            "component": "hindi_urdu/headcomputation",
            "metadata": {
                "label": "headcomputation",
                "x": 2952,
                "y": 360,
                "width": 72,
                "height": 72,
                "progress": 100
            }
        },
        "hindi_urdu/wx2utf_29c": {
            "component": "hindi_urdu/wx2utf",
            "metadata": {
                "label": "wx2utf",
                "x": 3204,
                "y": 360,
                "width": 72,
                "height": 72,
                "progress": 100
            }
        },
        "hindi_urdu/lexicaltransfer_eyb": {
            "component": "hindi_urdu/lexicaltransfer",
            "metadata": {
                "label": "lexicaltransfer",
                "x": 3537.7923610058724,
                "y": 427.22621375646185,
                "width": 72,
                "height": 72,
                "progress": 100
            }
        },
        "hindi_urdu/transliterate_jxq": {
            "component": "hindi_urdu/transliterate",
            "metadata": {
                "label": "transliterate",
                "x": 3816,
                "y": 432,
                "width": 72,
                "height": 72,
                "progress": 100
            }
        },
        "hindi_urdu/utf2wx_urd_1vaq": {
            "component": "hindi_urdu/utf2wx_urd",
            "metadata": {
                "label": "utf2wx_urd",
                "x": 4032,
                "y": 432,
                "width": 72,
                "height": 72,
                "progress": 100
            }
        },
        "hindi_urdu/agreementfeature_19pb": {
            "component": "hindi_urdu/agreementfeature",
            "metadata": {
                "label": "agreementfeature",
                "x": 4284,
                "y": 432,
                "width": 72,
                "height": 72,
                "progress": 100
            }
        },
        "hindi_urdu/interchunk_i0e": {
            "component": "hindi_urdu/interchunk",
            "metadata": {
                "label": "interchunk",
                "x": 4572,
                "y": 432,
                "width": 72,
                "height": 72,
                "progress": 100
            }
        },
        "hindi_urdu/intrachunk_zvg": {
            "component": "hindi_urdu/intrachunk",
            "metadata": {
                "label": "intrachunk",
                "x": 4788,
                "y": 432,
                "width": 72,
                "height": 72,
                "progress": 100
            }
        },
        "hindi_urdu/defaultfeatures_vmw": {
            "component": "hindi_urdu/defaultfeatures",
            "metadata": {
                "label": "defaultfeatures",
                "x": 5004,
                "y": 432,
                "width": 72,
                "height": 72,
                "progress": 100
            }
        },
        "hindi_urdu/wordgenerator_1icu": {
            "component": "hindi_urdu/wordgenerator",
            "metadata": {
                "label": "wordgenerator",
                "x": 5256,
                "y": 432,
                "width": 72,
                "height": 72,
                "progress": 100
            }
        },
        "core/sentence_output_f07": {
            "component": "core/sentence_output",
            "metadata": {
                "label": "Output",
                "x": 5472,
                "y": 432,
                "width": 72,
                "height": 72,
                "progress": 100
            }
        },
        "hindi_urdu/ner_c11": {
            "component": "hindi_urdu/ner",
            "metadata": {
                "label": "ner",
                "x": 2124,
                "y": 540,
                "width": 72,
                "height": 72,
                "progress": 100
            },
            "process_definition": "function (kathaa_inputs, progress, done){\n  console.log(\"Inside ner\");\n  //save computed output values\n  var kathaa_outputs = {}\n\n  hindi_urdu_request.post({\n    headers: {'content-type' : 'application/x-www-form-urlencoded;charset=UTF-8'},\n    url:     'http://api.ilmt.iiit.ac.in/hin/urd/9/9',\n    body:    \"input=\"+encodeURI(kathaa_inputs['in_ssf']+\"&depsOn=[]\")\n  }, function(error, response, body){\n    if (!error && response.statusCode == 200) {\n      try{\n        console.log(body);\n        body = hindi_urdu_entities.decode(body);\n        body = JSON.parse(body);\n        //Assumes only one key is passed\n        for(var _key in body){\n          kathaa_outputs['out_ssf'] = body[_key];\n          done && done(null, kathaa_outputs);\n          return;\n        }\n      }catch(e){\n        var err = new Error('Malformed reply from Sampark API Server');        \n        done(err);\n      }\n    }else{\n      var err = new Error('Sampark API Server non responsive');      \n      done(err);\n    }\n  });\n//\n// \n// Available external libraries \n// \n// GLOBAL.hindi_urdu_request = require('request');\n// GLOBAL.hindi_urdu_Entities = require('html-entities').AllHtmlEntities;\n// GLOBAL.hindi_urdu_entities = new GLOBAL.hindi_urdu_Entities();\n}"
        },
        "hindi_urdu/merger_5ek": {
            "component": "hindi_urdu/merger",
            "metadata": {
                "label": "merger",
                "x": 2520,
                "y": 324,
                "width": 72,
                "height": 72,
                "progress": 100
            },
            "process_definition": "function(kathaa_inputs, progress, done){\n    console.log(\"Inside merger\");\n    //save computed output values\n    var kathaa_outputs = {}\n\n\n    //encode all inputs in base64\n    for(_key in kathaa_inputs){\n      kathaa_inputs[_key] = new Buffer(kathaa_inputs[_key]).toString('base64');\n    }\n\n    var params = { depsOn: [ 'ner', 'multiwordexpr', 'chunker' ],\n      src_lang: 'hin',\n      tgt_lang: 'urd',\n      ner: kathaa_inputs['in_ner'],\n      multiwordexpr: kathaa_inputs['in_mwe'],\n      chunker: kathaa_inputs['in_chunker']\n    }\n\n\n    var postData = querystring.stringify(params);\n    var options = {\n          hostname: 'pipeline.ilmt.iiit.ac.in',\n          port: 5000,\n          path: '/' + \"merger\",\n          method: 'POST',\n          headers: {\n              'Content-Type': 'application/x-www-form-urlencoded',\n              'Content-Length': postData.length\n          }\n    };\n    var start =10;\n    var end=10;\n    callback = function(response) {\n     var str = ''\n     response.setEncoding('utf8');\n     response.on('data', function (chunk) {\n       str += chunk;\n     });\n     response.on('end', function () {\n       kathaa_outputs['out_ssf'] = new Buffer(str, 'base64').toString('utf8');\n       done(null, kathaa_outputs);\n     });\n   }\n\n   var httpreq = http.request(options, callback);\n   httpreq.write(postData);\n   httpreq.end();\n//\n//\n// Available external libraries\n//\n// GLOBAL.hindi_urdu_request = require('request');\n// GLOBAL.hindi_urdu_Entities = require('html-entities').AllHtmlEntities;\n// GLOBAL.hindi_urdu_entities = new GLOBAL.hindi_urdu_Entities();\n}"
        }
    },
    "connections": [
        {
            "src": {
                "process": "core/sentence_input_14mt",
                "port": "out_ssf"
            },
            "tgt": {
                "process": "hindi_urdu/tokenizer_zqf",
                "port": "in_ssf"
            }
        },
        {
            "src": {
                "process": "hindi_urdu/tokenizer_zqf",
                "port": "out_ssf"
            },
            "tgt": {
                "process": "hindi_urdu/utf2wx_6jt",
                "port": "in_ssf"
            }
        },
        {
            "src": {
                "process": "hindi_urdu/utf2wx_6jt",
                "port": "out_ssf"
            },
            "tgt": {
                "process": "hindi_urdu/morph_11rg",
                "port": "in_ssf"
            }
        },
        {
            "src": {
                "process": "hindi_urdu/morph_11rg",
                "port": "out_ssf"
            },
            "tgt": {
                "process": "hindi_urdu/postagger_xek",
                "port": "in_ssf"
            }
        },
        {
            "src": {
                "process": "hindi_urdu/postagger_xek",
                "port": "out_ssf"
            },
            "tgt": {
                "process": "hindi_urdu/pruning_1ik8",
                "port": "in_ssf"
            }
        },
        {
            "src": {
                "process": "hindi_urdu/pruning_1ik8",
                "port": "out_ssf"
            },
            "tgt": {
                "process": "hindi_panjabi/guessmorph_17z8",
                "port": "in_ssf"
            }
        },
        {
            "src": {
                "process": "hindi_panjabi/guessmorph_17z8",
                "port": "out_ssf"
            },
            "tgt": {
                "process": "hindi_urdu/pickonemorph_wxc",
                "port": "in_ssf"
            }
        },
        {
            "src": {
                "process": "hindi_urdu/pickonemorph_wxc",
                "port": "out_ssf"
            },
            "tgt": {
                "process": "hindi_urdu/chunker_1436",
                "port": "in_ssf"
            }
        },
        {
            "src": {
                "process": "hindi_urdu/pickonemorph_wxc",
                "port": "out_ssf"
            },
            "tgt": {
                "process": "hindi_urdu/multiwordexpr_s86",
                "port": "in_ssf"
            },
            "metadata": {
                "route": 0
            }
        },
        {
            "src": {
                "process": "hindi_urdu/headcomputation_1vs4",
                "port": "out_ssf"
            },
            "tgt": {
                "process": "hindi_urdu/wx2utf_29c",
                "port": "in_ssf"
            }
        },
        {
            "src": {
                "process": "hindi_urdu/wx2utf_29c",
                "port": "out_ssf"
            },
            "tgt": {
                "process": "hindi_urdu/lexicaltransfer_eyb",
                "port": "in_ssf"
            }
        },
        {
            "src": {
                "process": "hindi_urdu/lexicaltransfer_eyb",
                "port": "out_ssf"
            },
            "tgt": {
                "process": "hindi_urdu/transliterate_jxq",
                "port": "in_ssf"
            }
        },
        {
            "src": {
                "process": "hindi_urdu/transliterate_jxq",
                "port": "out_ssf"
            },
            "tgt": {
                "process": "hindi_urdu/utf2wx_urd_1vaq",
                "port": "in_ssf"
            },
            "metadata": {
                "route": null
            }
        },
        {
            "src": {
                "process": "hindi_urdu/utf2wx_urd_1vaq",
                "port": "out_ssf"
            },
            "tgt": {
                "process": "hindi_urdu/agreementfeature_19pb",
                "port": "in_ssf"
            }
        },
        {
            "src": {
                "process": "hindi_urdu/agreementfeature_19pb",
                "port": "out_ssf"
            },
            "tgt": {
                "process": "hindi_urdu/interchunk_i0e",
                "port": "in_ssf"
            }
        },
        {
            "src": {
                "process": "hindi_urdu/interchunk_i0e",
                "port": "out_ssf"
            },
            "tgt": {
                "process": "hindi_urdu/intrachunk_zvg",
                "port": "in_ssf"
            }
        },
        {
            "src": {
                "process": "hindi_urdu/intrachunk_zvg",
                "port": "out_ssf"
            },
            "tgt": {
                "process": "hindi_urdu/defaultfeatures_vmw",
                "port": "in_ssf"
            }
        },
        {
            "src": {
                "process": "hindi_urdu/defaultfeatures_vmw",
                "port": "out_ssf"
            },
            "tgt": {
                "process": "hindi_urdu/wordgenerator_1icu",
                "port": "in_ssf"
            }
        },
        {
            "src": {
                "process": "hindi_urdu/wordgenerator_1icu",
                "port": "out_ssf"
            },
            "tgt": {
                "process": "core/sentence_output_f07",
                "port": "in_ssf"
            }
        },
        {
            "src": {
                "process": "hindi_urdu/utf2wx_6jt",
                "port": "out_ssf"
            },
            "tgt": {
                "process": "hindi_urdu/ner_c11",
                "port": "in_ssf"
            },
            "metadata": {
                "route": 0
            }
        },
        {
            "src": {
                "process": "hindi_urdu/multiwordexpr_s86",
                "port": "out_ssf"
            },
            "tgt": {
                "process": "hindi_urdu/merger_5ek",
                "port": "in_mwe"
            },
            "metadata": {
                "route": null
            }
        },
        {
            "src": {
                "process": "hindi_urdu/chunker_1436",
                "port": "out_ssf"
            },
            "tgt": {
                "process": "hindi_urdu/merger_5ek",
                "port": "in_chunker"
            },
            "metadata": {
                "route": null
            }
        },
        {
            "src": {
                "process": "hindi_urdu/ner_c11",
                "port": "out_ssf"
            },
            "tgt": {
                "process": "hindi_urdu/merger_5ek",
                "port": "in_ner"
            },
            "metadata": {
                "route": null
            }
        },
        {
            "src": {
                "process": "hindi_urdu/merger_5ek",
                "port": "out_ssf"
            },
            "tgt": {
                "process": "hindi_urdu/headcomputation_1vs4",
                "port": "in_ssf"
            },
            "metadata": {}
        }
    ]
});
