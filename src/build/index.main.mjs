// Automatically generated with Reach 0.1.2
/* eslint-disable */
export const _version = '0.1.2';


export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };

export function _getViews(s) {
  const stdlib = s.reachStdlib;
  return {
    infos: {
      },
    views: {
      }
    };
  };

export async function InsuranceCompany(ctc, interact) {
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Bool;
  const ctc2 = stdlib.T_Tuple([ctc0]);
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Tuple([ctc0, ctc3, ctc3, ctc0, ctc0, ctc0, ctc0, ctc0, ctc1, ctc0]);
  const ctc5 = stdlib.T_Tuple([ctc0, ctc3, ctc3, ctc0, ctc0, ctc0, ctc0, ctc0, ctc1]);
  const ctc6 = stdlib.T_Tuple([ctc0, ctc3, ctc3, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0]);
  const ctc7 = stdlib.T_Tuple([ctc0, ctc3, ctc3, ctc0, ctc0, ctc0, ctc0, ctc0]);
  const ctc8 = stdlib.T_Tuple([]);
  const ctc9 = stdlib.T_Tuple([ctc0, ctc3, ctc0]);
  const ctc10 = stdlib.T_Tuple([ctc0, ctc3]);
  const ctc11 = stdlib.T_Tuple([ctc0, ctc3, ctc3, ctc0, ctc0]);
  const ctc12 = stdlib.T_Tuple([ctc0, ctc3, ctc3, ctc0]);
  
  
  const v18 = await ctc.creationTime();
  
  const txn1 = await (ctc.recv(1, 0, [], false, false));
  const [] = txn1.data;
  const v21 = txn1.time;
  const v19 = txn1.from;
  ;
  const v25 = stdlib.protect(ctc0, await interact.getControlBalance(), {
    at: './index.rsh:52:72:application',
    fs: ['at ./index.rsh:51:28:application call to [unknown function] (defined at: ./index.rsh:51:32:function exp)'],
    msg: 'getControlBalance',
    who: 'InsuranceCompany'
    });
  const v26 = stdlib.gt(v25, stdlib.checkedBigNumberify('./index.rsh:53:36:decimal', stdlib.UInt_max, 0));
  stdlib.assert(v26, {
    at: './index.rsh:53:15:application',
    fs: ['at ./index.rsh:51:28:application call to [unknown function] (defined at: ./index.rsh:51:32:function exp)'],
    msg: null,
    who: 'InsuranceCompany'
    });
  
  
  const txn2 = await (ctc.sendrecv(2, 1, stdlib.checkedBigNumberify('./index.rsh:55:24:dot', stdlib.UInt_max, 1), [ctc3, ctc0, ctc0], [v19, v21, v25], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [ctc0], true, true, false, (async (txn2) => {
    const sim_r = { txns: [] };
    sim_r.prevSt = stdlib.digest(ctc9, [stdlib.checkedBigNumberify('./index.rsh:55:24:dot', stdlib.UInt_max, 1), v19, v21]);
    sim_r.prevSt_noPrevTime = stdlib.digest(ctc10, [stdlib.checkedBigNumberify('./index.rsh:55:24:dot', stdlib.UInt_max, 1), v19]);
    const [v28] = txn2.data;
    const v30 = txn2.time;
    const v27 = txn2.from;
    
    sim_r.txns.push({
      amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
      kind: 'to',
      tok: undefined
      });
    sim_r.nextSt = stdlib.digest(ctc11, [stdlib.checkedBigNumberify('./index.rsh:56:15:after expr stmt semicolon', stdlib.UInt_max, 2), v19, v27, v28, v30]);
    sim_r.nextSt_noTime = stdlib.digest(ctc12, [stdlib.checkedBigNumberify('./index.rsh:56:15:after expr stmt semicolon', stdlib.UInt_max, 2), v19, v27, v28]);
    sim_r.view = [ctc2, [stdlib.checkedBigNumberify('./index.rsh:56:15:after expr stmt semicolon', stdlib.UInt_max, 0)]];
    sim_r.isHalt = false;
    
    return sim_r;
    })));
  const [v28] = txn2.data;
  const v30 = txn2.time;
  const v27 = txn2.from;
  ;
  const txn3 = await (ctc.recv(3, 1, [ctc0], false, false));
  const [v38] = txn3.data;
  const v41 = txn3.time;
  const v37 = txn3.from;
  ;
  const v40 = stdlib.addressEq(v19, v37);
  stdlib.assert(v40, {
    at: './index.rsh:63:18:dot',
    fs: [],
    msg: 'sender correct',
    who: 'InsuranceCompany'
    });
  const txn4 = await (ctc.recv(4, 0, [], false, false));
  const [] = txn4.data;
  const v45 = txn4.time;
  const v42 = txn4.from;
  ;
  const v44 = stdlib.addressEq(v19, v42);
  stdlib.assert(v44, {
    at: './index.rsh:83:18:dot',
    fs: [],
    msg: 'sender correct',
    who: 'InsuranceCompany'
    });
  let v47 = stdlib.checkedBigNumberify('./index.rsh:86:49:decimal', stdlib.UInt_max, 0);
  let v48 = stdlib.checkedBigNumberify('./index.rsh:86:46:decimal', stdlib.UInt_max, 0);
  let v136 = v45;
  let v138 = stdlib.checkedBigNumberify('./index.rsh:compileDApp', stdlib.UInt_max, 0);
  
  while ((() => {
    const v50 = stdlib.eq(v48, stdlib.checkedBigNumberify('./index.rsh:88:25:decimal', stdlib.UInt_max, 0));
    
    return v50;})()) {
    const txn5 = await (ctc.recv(9, 1, [ctc0], false, false));
    const [v60] = txn5.data;
    const v63 = txn5.time;
    const v59 = txn5.from;
    ;
    const v62 = stdlib.addressEq(v19, v59);
    stdlib.assert(v62, {
      at: './index.rsh:103:20:dot',
      fs: [],
      msg: 'sender correct',
      who: 'InsuranceCompany'
      });
    await ctc.wait(stdlib.checkedBigNumberify('./index.rsh:49:19:decimal', stdlib.UInt_max, 2));
    const txn6 = await (ctc.recv(10, 0, [], false, false));
    const [] = txn6.data;
    const v68 = txn6.time;
    const v64 = txn6.from;
    const v66 = stdlib.add(v138, v38);
    ;
    const v67 = stdlib.addressEq(v19, v64);
    stdlib.assert(v67, {
      at: './index.rsh:109:20:dot',
      fs: [],
      msg: 'sender correct',
      who: 'InsuranceCompany'
      });
    const txn7 = await (ctc.recv(11, 2, [ctc1, ctc0], false, false));
    const [v79, v80] = txn7.data;
    const v83 = txn7.time;
    const v78 = txn7.from;
    ;
    const v82 = stdlib.addressEq(v19, v78);
    stdlib.assert(v82, {
      at: './index.rsh:119:20:dot',
      fs: [],
      msg: 'sender correct',
      who: 'InsuranceCompany'
      });
    const v85 = stdlib.le(v80, v66);
    stdlib.assert(v85, {
      at: './index.rsh:120:16:application',
      fs: [],
      msg: null,
      who: 'InsuranceCompany'
      });
    const v90 = stdlib.protect(ctc1, await interact.approveUserRequest(v66, v79, v80), {
      at: './index.rsh:124:68:application',
      fs: ['at ./index.rsh:123:30:application call to [unknown function] (defined at: ./index.rsh:123:34:function exp)'],
      msg: 'approveUserRequest',
      who: 'InsuranceCompany'
      });
    
    
    const txn8 = await (ctc.sendrecv(12, 1, stdlib.checkedBigNumberify('./index.rsh:126:26:dot', stdlib.UInt_max, 7), [ctc3, ctc3, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0, ctc1], [v19, v27, v28, v38, v47, v66, v80, v83, v90], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [ctc1], true, true, false, (async (txn8) => {
      const sim_r = { txns: [] };
      sim_r.prevSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:126:26:dot', stdlib.UInt_max, 11), v19, v27, v28, v38, v47, v66, v80, v83]);
      sim_r.prevSt_noPrevTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:126:26:dot', stdlib.UInt_max, 11), v19, v27, v28, v38, v47, v66, v80]);
      const [v92] = txn8.data;
      const v95 = txn8.time;
      const v91 = txn8.from;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
        kind: 'to',
        tok: undefined
        });
      const v94 = stdlib.addressEq(v27, v91);
      stdlib.assert(v94, {
        at: './index.rsh:126:26:dot',
        fs: [],
        msg: 'sender correct',
        who: 'InsuranceCompany'
        });
      sim_r.nextSt = stdlib.digest(ctc4, [stdlib.checkedBigNumberify('./index.rsh:130:17:after expr stmt semicolon', stdlib.UInt_max, 12), v19, v27, v28, v38, v47, v66, v80, v92, v95]);
      sim_r.nextSt_noTime = stdlib.digest(ctc5, [stdlib.checkedBigNumberify('./index.rsh:130:17:after expr stmt semicolon', stdlib.UInt_max, 12), v19, v27, v28, v38, v47, v66, v80, v92]);
      sim_r.view = [ctc2, [stdlib.checkedBigNumberify('./index.rsh:130:17:after expr stmt semicolon', stdlib.UInt_max, 0)]];
      sim_r.isHalt = false;
      
      return sim_r;
      })));
    const [v92] = txn8.data;
    const v95 = txn8.time;
    const v91 = txn8.from;
    ;
    const v94 = stdlib.addressEq(v27, v91);
    stdlib.assert(v94, {
      at: './index.rsh:126:26:dot',
      fs: [],
      msg: 'sender correct',
      who: 'InsuranceCompany'
      });
    const txn9 = await (ctc.recv(13, 1, [ctc0], false, false));
    const [v101] = txn9.data;
    const v104 = txn9.time;
    const v100 = txn9.from;
    ;
    const v103 = stdlib.addressEq(v19, v100);
    stdlib.assert(v103, {
      at: './index.rsh:141:20:dot',
      fs: [],
      msg: 'sender correct',
      who: 'InsuranceCompany'
      });
    const v105 = stdlib.ge(v101, v28);
    if (v105) {
      if (v92) {
        const v109 = stdlib.sub(v66, v80);
        ;
        const v110 = stdlib.add(v47, stdlib.checkedBigNumberify('./index.rsh:150:65:decimal', stdlib.UInt_max, 1));
        const cv47 = v110;
        const cv48 = stdlib.checkedBigNumberify('./index.rsh:150:47:decimal', stdlib.UInt_max, 0);
        const cv136 = v104;
        const cv138 = v109;
        
        v47 = cv47;
        v48 = cv48;
        v136 = cv136;
        v138 = cv138;
        
        continue;}
      else {
        const v110 = stdlib.add(v47, stdlib.checkedBigNumberify('./index.rsh:150:65:decimal', stdlib.UInt_max, 1));
        const cv47 = v110;
        const cv48 = stdlib.checkedBigNumberify('./index.rsh:150:47:decimal', stdlib.UInt_max, 0);
        const cv136 = v104;
        const cv138 = v66;
        
        v47 = cv47;
        v48 = cv48;
        v136 = cv136;
        v138 = cv138;
        
        continue;}}
    else {
      const cv47 = v47;
      const cv48 = stdlib.checkedBigNumberify('./index.rsh:153:47:decimal', stdlib.UInt_max, 1);
      const cv136 = v104;
      const cv138 = v66;
      
      v47 = cv47;
      v48 = cv48;
      v136 = cv136;
      v138 = cv138;
      
      continue;}
    
    
    
    
    }
  const txn5 = await (ctc.recv(7, 1, [ctc0], false, false));
  const [v116] = txn5.data;
  const v119 = txn5.time;
  const v115 = txn5.from;
  ;
  const v118 = stdlib.addressEq(v19, v115);
  stdlib.assert(v118, {
    at: './index.rsh:164:18:dot',
    fs: [],
    msg: 'sender correct',
    who: 'InsuranceCompany'
    });
  ;
  const v128 = stdlib.protect(ctc0, await interact.getInsuranceCompanyBalance(), {
    at: './index.rsh:169:95:application',
    fs: ['at ./index.rsh:168:28:application call to [unknown function] (defined at: ./index.rsh:168:32:function exp)'],
    msg: 'getInsuranceCompanyBalance',
    who: 'InsuranceCompany'
    });
  
  
  const txn6 = await (ctc.sendrecv(8, 1, stdlib.checkedBigNumberify('./index.rsh:171:24:dot', stdlib.UInt_max, 1), [ctc3, ctc0, ctc0], [v27, v119, v128], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [ctc0], true, true, false, (async (txn6) => {
    const sim_r = { txns: [] };
    sim_r.prevSt = stdlib.digest(ctc9, [stdlib.checkedBigNumberify('./index.rsh:171:24:dot', stdlib.UInt_max, 7), v27, v119]);
    sim_r.prevSt_noPrevTime = stdlib.digest(ctc10, [stdlib.checkedBigNumberify('./index.rsh:171:24:dot', stdlib.UInt_max, 7), v27]);
    const [v130] = txn6.data;
    const v133 = txn6.time;
    const v129 = txn6.from;
    
    sim_r.txns.push({
      amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
      kind: 'to',
      tok: undefined
      });
    const v132 = stdlib.addressEq(v27, v129);
    stdlib.assert(v132, {
      at: './index.rsh:171:24:dot',
      fs: [],
      msg: 'sender correct',
      who: 'InsuranceCompany'
      });
    sim_r.txns.push({
      kind: 'halt',
      tok: undefined
      })
    sim_r.nextSt = stdlib.digest(ctc8, []);
    sim_r.nextSt_noTime = stdlib.digest(ctc8, []);
    sim_r.view = [ctc2, [stdlib.checkedBigNumberify('./index.rsh:181:15:after expr stmt semicolon', stdlib.UInt_max, 0)]];
    sim_r.isHalt = true;
    
    return sim_r;
    })));
  const [v130] = txn6.data;
  const v133 = txn6.time;
  const v129 = txn6.from;
  ;
  const v132 = stdlib.addressEq(v27, v129);
  stdlib.assert(v132, {
    at: './index.rsh:171:24:dot',
    fs: [],
    msg: 'sender correct',
    who: 'InsuranceCompany'
    });
  return;
  
  
  
  
  
  
  };
export async function Subscriber(ctc, interact) {
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Bool;
  const ctc3 = stdlib.T_Object({
    isRequested: ctc2,
    requestedPayment: ctc0
    });
  const ctc4 = stdlib.T_Tuple([ctc0]);
  const ctc5 = stdlib.T_Address;
  const ctc6 = stdlib.T_Tuple([ctc0, ctc5, ctc5, ctc0, ctc0, ctc0, ctc0, ctc0]);
  const ctc7 = stdlib.T_Tuple([ctc0, ctc5, ctc5, ctc0, ctc0, ctc0, ctc0]);
  const ctc8 = stdlib.T_Tuple([ctc0, ctc5, ctc5, ctc0, ctc0]);
  const ctc9 = stdlib.T_Tuple([ctc0, ctc5, ctc5, ctc0]);
  const ctc10 = stdlib.T_Tuple([ctc0, ctc5, ctc5, ctc0, ctc0, ctc0, ctc0, ctc0, ctc2, ctc0]);
  const ctc11 = stdlib.T_Tuple([ctc0, ctc5, ctc5, ctc0, ctc0, ctc0, ctc0, ctc0, ctc2]);
  const ctc12 = stdlib.T_Tuple([ctc0, ctc5, ctc5, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0]);
  const ctc13 = stdlib.T_Tuple([ctc0, ctc5, ctc0]);
  const ctc14 = stdlib.T_Tuple([ctc0, ctc5]);
  const ctc15 = stdlib.T_Tuple([ctc0, ctc5, ctc5, ctc0, ctc0, ctc0]);
  const ctc16 = stdlib.T_Tuple([ctc0, ctc0]);
  
  
  const v18 = await ctc.creationTime();
  
  
  const txn1 = await (ctc.sendrecv(1, 0, stdlib.checkedBigNumberify('./index.rsh:46:18:dot', stdlib.UInt_max, 0), [ctc0], [v18], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [], true, true, false, (async (txn1) => {
    const sim_r = { txns: [] };
    sim_r.prevSt = stdlib.digest(ctc16, [stdlib.checkedBigNumberify('./index.rsh:46:18:dot', stdlib.UInt_max, 0), v18]);
    sim_r.prevSt_noPrevTime = stdlib.digest(ctc4, [stdlib.checkedBigNumberify('./index.rsh:46:18:dot', stdlib.UInt_max, 0)]);
    const [] = txn1.data;
    const v21 = txn1.time;
    const v19 = txn1.from;
    
    sim_r.txns.push({
      amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
      kind: 'to',
      tok: undefined
      });
    sim_r.nextSt = stdlib.digest(ctc13, [stdlib.checkedBigNumberify('./index.rsh:47:15:after expr stmt semicolon', stdlib.UInt_max, 1), v19, v21]);
    sim_r.nextSt_noTime = stdlib.digest(ctc14, [stdlib.checkedBigNumberify('./index.rsh:47:15:after expr stmt semicolon', stdlib.UInt_max, 1), v19]);
    sim_r.view = [ctc4, [stdlib.checkedBigNumberify('./index.rsh:47:15:after expr stmt semicolon', stdlib.UInt_max, 0)]];
    sim_r.isHalt = false;
    
    return sim_r;
    })));
  const [] = txn1.data;
  const v21 = txn1.time;
  const v19 = txn1.from;
  ;
  const txn2 = await (ctc.recv(2, 1, [ctc0], false, false));
  const [v28] = txn2.data;
  const v30 = txn2.time;
  const v27 = txn2.from;
  ;
  const v34 = stdlib.protect(ctc0, await interact.getPayment(), {
    at: './index.rsh:59:55:application',
    fs: ['at ./index.rsh:58:22:application call to [unknown function] (defined at: ./index.rsh:58:26:function exp)'],
    msg: 'getPayment',
    who: 'Subscriber'
    });
  const v35 = stdlib.gt(v34, stdlib.checkedBigNumberify('./index.rsh:60:26:decimal', stdlib.UInt_max, 0));
  stdlib.assert(v35, {
    at: './index.rsh:60:15:application',
    fs: ['at ./index.rsh:58:22:application call to [unknown function] (defined at: ./index.rsh:58:26:function exp)'],
    msg: null,
    who: 'Subscriber'
    });
  const v36 = stdlib.gt(v28, v34);
  stdlib.assert(v36, {
    at: './index.rsh:61:15:application',
    fs: ['at ./index.rsh:58:22:application call to [unknown function] (defined at: ./index.rsh:58:26:function exp)'],
    msg: null,
    who: 'Subscriber'
    });
  
  
  const txn3 = await (ctc.sendrecv(3, 1, stdlib.checkedBigNumberify('./index.rsh:63:18:dot', stdlib.UInt_max, 3), [ctc5, ctc5, ctc0, ctc0, ctc0], [v19, v27, v28, v30, v34], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [ctc0], true, true, false, (async (txn3) => {
    const sim_r = { txns: [] };
    sim_r.prevSt = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:63:18:dot', stdlib.UInt_max, 2), v19, v27, v28, v30]);
    sim_r.prevSt_noPrevTime = stdlib.digest(ctc9, [stdlib.checkedBigNumberify('./index.rsh:63:18:dot', stdlib.UInt_max, 2), v19, v27, v28]);
    const [v38] = txn3.data;
    const v41 = txn3.time;
    const v37 = txn3.from;
    
    sim_r.txns.push({
      amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
      kind: 'to',
      tok: undefined
      });
    const v40 = stdlib.addressEq(v19, v37);
    stdlib.assert(v40, {
      at: './index.rsh:63:18:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Subscriber'
      });
    sim_r.nextSt = stdlib.digest(ctc15, [stdlib.checkedBigNumberify('./index.rsh:64:15:after expr stmt semicolon', stdlib.UInt_max, 3), v19, v27, v28, v38, v41]);
    sim_r.nextSt_noTime = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:64:15:after expr stmt semicolon', stdlib.UInt_max, 3), v19, v27, v28, v38]);
    sim_r.view = [ctc4, [stdlib.checkedBigNumberify('./index.rsh:64:15:after expr stmt semicolon', stdlib.UInt_max, 0)]];
    sim_r.isHalt = false;
    
    return sim_r;
    })));
  const [v38] = txn3.data;
  const v41 = txn3.time;
  const v37 = txn3.from;
  ;
  const v40 = stdlib.addressEq(v19, v37);
  stdlib.assert(v40, {
    at: './index.rsh:63:18:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Subscriber'
    });
  
  const txn4 = await (ctc.sendrecv(4, 0, stdlib.checkedBigNumberify('./index.rsh:83:18:dot', stdlib.UInt_max, 4), [ctc5, ctc5, ctc0, ctc0, ctc0], [v19, v27, v28, v38, v41], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [], true, true, false, (async (txn4) => {
    const sim_r = { txns: [] };
    sim_r.prevSt = stdlib.digest(ctc15, [stdlib.checkedBigNumberify('./index.rsh:83:18:dot', stdlib.UInt_max, 3), v19, v27, v28, v38, v41]);
    sim_r.prevSt_noPrevTime = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:83:18:dot', stdlib.UInt_max, 3), v19, v27, v28, v38]);
    const [] = txn4.data;
    const v45 = txn4.time;
    const v42 = txn4.from;
    
    sim_r.txns.push({
      amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
      kind: 'to',
      tok: undefined
      });
    const v44 = stdlib.addressEq(v19, v42);
    stdlib.assert(v44, {
      at: './index.rsh:83:18:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Subscriber'
      });
    const v47 = stdlib.checkedBigNumberify('./index.rsh:86:49:decimal', stdlib.UInt_max, 0);
    const v48 = stdlib.checkedBigNumberify('./index.rsh:86:46:decimal', stdlib.UInt_max, 0);
    const v136 = v45;
    const v138 = stdlib.checkedBigNumberify('./index.rsh:compileDApp', stdlib.UInt_max, 0);
    
    if ((() => {
      const v50 = stdlib.eq(v48, stdlib.checkedBigNumberify('./index.rsh:88:25:decimal', stdlib.UInt_max, 0));
      
      return v50;})()) {
      sim_r.nextSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:91:17:after expr stmt semicolon', stdlib.UInt_max, 5), v19, v27, v28, v38, v47, v136, v138]);
      sim_r.nextSt_noTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:91:17:after expr stmt semicolon', stdlib.UInt_max, 5), v19, v27, v28, v38, v47, v138]);
      sim_r.view = [ctc4, [stdlib.checkedBigNumberify('./index.rsh:91:17:after expr stmt semicolon', stdlib.UInt_max, 0)]];
      sim_r.isHalt = false;
      }
    else {
      sim_r.nextSt = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:160:15:after expr stmt semicolon', stdlib.UInt_max, 6), v19, v27, v136, v138]);
      sim_r.nextSt_noTime = stdlib.digest(ctc9, [stdlib.checkedBigNumberify('./index.rsh:160:15:after expr stmt semicolon', stdlib.UInt_max, 6), v19, v27, v138]);
      sim_r.view = [ctc4, [stdlib.checkedBigNumberify('./index.rsh:160:15:after expr stmt semicolon', stdlib.UInt_max, 0)]];
      sim_r.isHalt = false;
      }
    return sim_r;
    })));
  const [] = txn4.data;
  const v45 = txn4.time;
  const v42 = txn4.from;
  ;
  const v44 = stdlib.addressEq(v19, v42);
  stdlib.assert(v44, {
    at: './index.rsh:83:18:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Subscriber'
    });
  let v47 = stdlib.checkedBigNumberify('./index.rsh:86:49:decimal', stdlib.UInt_max, 0);
  let v48 = stdlib.checkedBigNumberify('./index.rsh:86:46:decimal', stdlib.UInt_max, 0);
  let v136 = v45;
  let v138 = stdlib.checkedBigNumberify('./index.rsh:compileDApp', stdlib.UInt_max, 0);
  
  while ((() => {
    const v50 = stdlib.eq(v48, stdlib.checkedBigNumberify('./index.rsh:88:25:decimal', stdlib.UInt_max, 0));
    
    return v50;})()) {
    const v54 = stdlib.add(v47, stdlib.checkedBigNumberify('./index.rsh:94:52:decimal', stdlib.UInt_max, 1));
    stdlib.protect(ctc1, await interact.showPaymentCount(v54), {
      at: './index.rsh:94:36:application',
      fs: ['at ./index.rsh:93:24:application call to [unknown function] (defined at: ./index.rsh:93:28:function exp)'],
      msg: 'showPaymentCount',
      who: 'Subscriber'
      });
    
    const v58 = stdlib.protect(ctc0, await interact.getSubscriberBalanceBeforePayment(), {
      at: './index.rsh:100:98:application',
      fs: ['at ./index.rsh:99:24:application call to [unknown function] (defined at: ./index.rsh:99:28:function exp)'],
      msg: 'getSubscriberBalanceBeforePayment',
      who: 'Subscriber'
      });
    
    
    const txn5 = await (ctc.sendrecv(9, 1, stdlib.checkedBigNumberify('./index.rsh:103:20:dot', stdlib.UInt_max, 5), [ctc5, ctc5, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0], [v19, v27, v28, v38, v47, v136, v138, v58], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [ctc0], true, true, false, (async (txn5) => {
      const sim_r = { txns: [] };
      sim_r.prevSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:103:20:dot', stdlib.UInt_max, 5), v19, v27, v28, v38, v47, v136, v138]);
      sim_r.prevSt_noPrevTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:103:20:dot', stdlib.UInt_max, 5), v19, v27, v28, v38, v47, v138]);
      const [v60] = txn5.data;
      const v63 = txn5.time;
      const v59 = txn5.from;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
        kind: 'to',
        tok: undefined
        });
      const v62 = stdlib.addressEq(v19, v59);
      stdlib.assert(v62, {
        at: './index.rsh:103:20:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Subscriber'
        });
      sim_r.nextSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:105:17:after expr stmt semicolon', stdlib.UInt_max, 9), v19, v27, v28, v38, v47, v63, v138]);
      sim_r.nextSt_noTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:105:17:after expr stmt semicolon', stdlib.UInt_max, 9), v19, v27, v28, v38, v47, v138]);
      sim_r.view = [ctc4, [stdlib.checkedBigNumberify('./index.rsh:105:17:after expr stmt semicolon', stdlib.UInt_max, 0)]];
      sim_r.isHalt = false;
      
      return sim_r;
      })));
    const [v60] = txn5.data;
    const v63 = txn5.time;
    const v59 = txn5.from;
    ;
    const v62 = stdlib.addressEq(v19, v59);
    stdlib.assert(v62, {
      at: './index.rsh:103:20:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Subscriber'
      });
    await ctc.wait(stdlib.checkedBigNumberify('./index.rsh:49:19:decimal', stdlib.UInt_max, 2));
    
    const txn6 = await (ctc.sendrecv(10, 0, stdlib.checkedBigNumberify('./index.rsh:109:20:dot', stdlib.UInt_max, 5), [ctc5, ctc5, ctc0, ctc0, ctc0, ctc0, ctc0], [v19, v27, v28, v38, v47, v63, v138], [v38, []], [], true, true, false, (async (txn6) => {
      const sim_r = { txns: [] };
      sim_r.prevSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:109:20:dot', stdlib.UInt_max, 9), v19, v27, v28, v38, v47, v63, v138]);
      sim_r.prevSt_noPrevTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:109:20:dot', stdlib.UInt_max, 9), v19, v27, v28, v38, v47, v138]);
      const [] = txn6.data;
      const v68 = txn6.time;
      const v64 = txn6.from;
      
      const v66 = stdlib.add(v138, v38);
      sim_r.txns.push({
        amt: v38,
        kind: 'to',
        tok: undefined
        });
      const v67 = stdlib.addressEq(v19, v64);
      stdlib.assert(v67, {
        at: './index.rsh:109:20:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Subscriber'
        });
      sim_r.nextSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:113:17:after expr stmt semicolon', stdlib.UInt_max, 10), v19, v27, v28, v38, v47, v66, v68]);
      sim_r.nextSt_noTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:113:17:after expr stmt semicolon', stdlib.UInt_max, 10), v19, v27, v28, v38, v47, v66]);
      sim_r.view = [ctc4, [stdlib.checkedBigNumberify('./index.rsh:113:17:after expr stmt semicolon', stdlib.UInt_max, 0)]];
      sim_r.isHalt = false;
      
      return sim_r;
      })));
    const [] = txn6.data;
    const v68 = txn6.time;
    const v64 = txn6.from;
    const v66 = stdlib.add(v138, v38);
    ;
    const v67 = stdlib.addressEq(v19, v64);
    stdlib.assert(v67, {
      at: './index.rsh:109:20:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Subscriber'
      });
    const v73 = stdlib.protect(ctc3, await interact.getUserRequest(v66), {
      at: './index.rsh:116:88:application',
      fs: ['at ./index.rsh:115:24:application call to [unknown function] (defined at: ./index.rsh:115:28:function exp)'],
      msg: 'getUserRequest',
      who: 'Subscriber'
      });
    const v74 = v73.isRequested;
    const v75 = v73.requestedPayment;
    const v77 = stdlib.le(v75, v66);
    stdlib.assert(v77, {
      at: './index.rsh:117:17:application',
      fs: ['at ./index.rsh:115:24:application call to [unknown function] (defined at: ./index.rsh:115:28:function exp)'],
      msg: null,
      who: 'Subscriber'
      });
    
    
    const txn7 = await (ctc.sendrecv(11, 2, stdlib.checkedBigNumberify('./index.rsh:119:20:dot', stdlib.UInt_max, 6), [ctc5, ctc5, ctc0, ctc0, ctc0, ctc0, ctc0, ctc2, ctc0], [v19, v27, v28, v38, v47, v66, v68, v74, v75], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [ctc2, ctc0], true, true, false, (async (txn7) => {
      const sim_r = { txns: [] };
      sim_r.prevSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:119:20:dot', stdlib.UInt_max, 10), v19, v27, v28, v38, v47, v66, v68]);
      sim_r.prevSt_noPrevTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:119:20:dot', stdlib.UInt_max, 10), v19, v27, v28, v38, v47, v66]);
      const [v79, v80] = txn7.data;
      const v83 = txn7.time;
      const v78 = txn7.from;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
        kind: 'to',
        tok: undefined
        });
      const v82 = stdlib.addressEq(v19, v78);
      stdlib.assert(v82, {
        at: './index.rsh:119:20:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Subscriber'
        });
      const v85 = stdlib.le(v80, v66);
      stdlib.assert(v85, {
        at: './index.rsh:120:16:application',
        fs: [],
        msg: null,
        who: 'Subscriber'
        });
      sim_r.nextSt = stdlib.digest(ctc12, [stdlib.checkedBigNumberify('./index.rsh:121:17:after expr stmt semicolon', stdlib.UInt_max, 11), v19, v27, v28, v38, v47, v66, v80, v83]);
      sim_r.nextSt_noTime = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:121:17:after expr stmt semicolon', stdlib.UInt_max, 11), v19, v27, v28, v38, v47, v66, v80]);
      sim_r.view = [ctc4, [stdlib.checkedBigNumberify('./index.rsh:121:17:after expr stmt semicolon', stdlib.UInt_max, 0)]];
      sim_r.isHalt = false;
      
      return sim_r;
      })));
    const [v79, v80] = txn7.data;
    const v83 = txn7.time;
    const v78 = txn7.from;
    ;
    const v82 = stdlib.addressEq(v19, v78);
    stdlib.assert(v82, {
      at: './index.rsh:119:20:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Subscriber'
      });
    const v85 = stdlib.le(v80, v66);
    stdlib.assert(v85, {
      at: './index.rsh:120:16:application',
      fs: [],
      msg: null,
      who: 'Subscriber'
      });
    const txn8 = await (ctc.recv(12, 1, [ctc2], false, false));
    const [v92] = txn8.data;
    const v95 = txn8.time;
    const v91 = txn8.from;
    ;
    const v94 = stdlib.addressEq(v27, v91);
    stdlib.assert(v94, {
      at: './index.rsh:126:26:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Subscriber'
      });
    const v99 = stdlib.protect(ctc0, await interact.getSubscriberBalanceAfterPayment(), {
      at: './index.rsh:138:96:application',
      fs: ['at ./index.rsh:137:24:application call to [unknown function] (defined at: ./index.rsh:137:28:function exp)'],
      msg: 'getSubscriberBalanceAfterPayment',
      who: 'Subscriber'
      });
    
    
    const txn9 = await (ctc.sendrecv(13, 1, stdlib.checkedBigNumberify('./index.rsh:141:20:dot', stdlib.UInt_max, 8), [ctc5, ctc5, ctc0, ctc0, ctc0, ctc0, ctc0, ctc2, ctc0, ctc0], [v19, v27, v28, v38, v47, v66, v80, v92, v95, v99], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [ctc0], true, true, false, (async (txn9) => {
      const sim_r = { txns: [] };
      sim_r.prevSt = stdlib.digest(ctc10, [stdlib.checkedBigNumberify('./index.rsh:141:20:dot', stdlib.UInt_max, 12), v19, v27, v28, v38, v47, v66, v80, v92, v95]);
      sim_r.prevSt_noPrevTime = stdlib.digest(ctc11, [stdlib.checkedBigNumberify('./index.rsh:141:20:dot', stdlib.UInt_max, 12), v19, v27, v28, v38, v47, v66, v80, v92]);
      const [v101] = txn9.data;
      const v104 = txn9.time;
      const v100 = txn9.from;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
        kind: 'to',
        tok: undefined
        });
      const v103 = stdlib.addressEq(v19, v100);
      stdlib.assert(v103, {
        at: './index.rsh:141:20:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Subscriber'
        });
      const v105 = stdlib.ge(v101, v28);
      if (v105) {
        if (v92) {
          const v109 = stdlib.sub(v66, v80);
          sim_r.txns.push({
            amt: v80,
            kind: 'from',
            to: v19,
            tok: undefined
            });
          const v110 = stdlib.add(v47, stdlib.checkedBigNumberify('./index.rsh:150:65:decimal', stdlib.UInt_max, 1));
          const cv47 = v110;
          const cv48 = stdlib.checkedBigNumberify('./index.rsh:150:47:decimal', stdlib.UInt_max, 0);
          const cv136 = v104;
          const cv138 = v109;
          
          (() => {
            const v47 = cv47;
            const v48 = cv48;
            const v136 = cv136;
            const v138 = cv138;
            
            if ((() => {
              const v50 = stdlib.eq(v48, stdlib.checkedBigNumberify('./index.rsh:88:25:decimal', stdlib.UInt_max, 0));
              
              return v50;})()) {
              sim_r.nextSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:91:17:after expr stmt semicolon', stdlib.UInt_max, 5), v19, v27, v28, v38, v47, v136, v138]);
              sim_r.nextSt_noTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:91:17:after expr stmt semicolon', stdlib.UInt_max, 5), v19, v27, v28, v38, v47, v138]);
              sim_r.view = [ctc4, [stdlib.checkedBigNumberify('./index.rsh:91:17:after expr stmt semicolon', stdlib.UInt_max, 0)]];
              sim_r.isHalt = false;
              }
            else {
              sim_r.nextSt = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:160:15:after expr stmt semicolon', stdlib.UInt_max, 6), v19, v27, v136, v138]);
              sim_r.nextSt_noTime = stdlib.digest(ctc9, [stdlib.checkedBigNumberify('./index.rsh:160:15:after expr stmt semicolon', stdlib.UInt_max, 6), v19, v27, v138]);
              sim_r.view = [ctc4, [stdlib.checkedBigNumberify('./index.rsh:160:15:after expr stmt semicolon', stdlib.UInt_max, 0)]];
              sim_r.isHalt = false;
              }})();}
        else {
          const v110 = stdlib.add(v47, stdlib.checkedBigNumberify('./index.rsh:150:65:decimal', stdlib.UInt_max, 1));
          const cv47 = v110;
          const cv48 = stdlib.checkedBigNumberify('./index.rsh:150:47:decimal', stdlib.UInt_max, 0);
          const cv136 = v104;
          const cv138 = v66;
          
          (() => {
            const v47 = cv47;
            const v48 = cv48;
            const v136 = cv136;
            const v138 = cv138;
            
            if ((() => {
              const v50 = stdlib.eq(v48, stdlib.checkedBigNumberify('./index.rsh:88:25:decimal', stdlib.UInt_max, 0));
              
              return v50;})()) {
              sim_r.nextSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:91:17:after expr stmt semicolon', stdlib.UInt_max, 5), v19, v27, v28, v38, v47, v136, v138]);
              sim_r.nextSt_noTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:91:17:after expr stmt semicolon', stdlib.UInt_max, 5), v19, v27, v28, v38, v47, v138]);
              sim_r.view = [ctc4, [stdlib.checkedBigNumberify('./index.rsh:91:17:after expr stmt semicolon', stdlib.UInt_max, 0)]];
              sim_r.isHalt = false;
              }
            else {
              sim_r.nextSt = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:160:15:after expr stmt semicolon', stdlib.UInt_max, 6), v19, v27, v136, v138]);
              sim_r.nextSt_noTime = stdlib.digest(ctc9, [stdlib.checkedBigNumberify('./index.rsh:160:15:after expr stmt semicolon', stdlib.UInt_max, 6), v19, v27, v138]);
              sim_r.view = [ctc4, [stdlib.checkedBigNumberify('./index.rsh:160:15:after expr stmt semicolon', stdlib.UInt_max, 0)]];
              sim_r.isHalt = false;
              }})();}}
      else {
        const cv47 = v47;
        const cv48 = stdlib.checkedBigNumberify('./index.rsh:153:47:decimal', stdlib.UInt_max, 1);
        const cv136 = v104;
        const cv138 = v66;
        
        (() => {
          const v47 = cv47;
          const v48 = cv48;
          const v136 = cv136;
          const v138 = cv138;
          
          if ((() => {
            const v50 = stdlib.eq(v48, stdlib.checkedBigNumberify('./index.rsh:88:25:decimal', stdlib.UInt_max, 0));
            
            return v50;})()) {
            sim_r.nextSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:91:17:after expr stmt semicolon', stdlib.UInt_max, 5), v19, v27, v28, v38, v47, v136, v138]);
            sim_r.nextSt_noTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:91:17:after expr stmt semicolon', stdlib.UInt_max, 5), v19, v27, v28, v38, v47, v138]);
            sim_r.view = [ctc4, [stdlib.checkedBigNumberify('./index.rsh:91:17:after expr stmt semicolon', stdlib.UInt_max, 0)]];
            sim_r.isHalt = false;
            }
          else {
            sim_r.nextSt = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:160:15:after expr stmt semicolon', stdlib.UInt_max, 6), v19, v27, v136, v138]);
            sim_r.nextSt_noTime = stdlib.digest(ctc9, [stdlib.checkedBigNumberify('./index.rsh:160:15:after expr stmt semicolon', stdlib.UInt_max, 6), v19, v27, v138]);
            sim_r.view = [ctc4, [stdlib.checkedBigNumberify('./index.rsh:160:15:after expr stmt semicolon', stdlib.UInt_max, 0)]];
            sim_r.isHalt = false;
            }})();}
      return sim_r;
      })));
    const [v101] = txn9.data;
    const v104 = txn9.time;
    const v100 = txn9.from;
    ;
    const v103 = stdlib.addressEq(v19, v100);
    stdlib.assert(v103, {
      at: './index.rsh:141:20:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Subscriber'
      });
    const v105 = stdlib.ge(v101, v28);
    if (v105) {
      if (v92) {
        const v109 = stdlib.sub(v66, v80);
        ;
        const v110 = stdlib.add(v47, stdlib.checkedBigNumberify('./index.rsh:150:65:decimal', stdlib.UInt_max, 1));
        const cv47 = v110;
        const cv48 = stdlib.checkedBigNumberify('./index.rsh:150:47:decimal', stdlib.UInt_max, 0);
        const cv136 = v104;
        const cv138 = v109;
        
        v47 = cv47;
        v48 = cv48;
        v136 = cv136;
        v138 = cv138;
        
        continue;}
      else {
        const v110 = stdlib.add(v47, stdlib.checkedBigNumberify('./index.rsh:150:65:decimal', stdlib.UInt_max, 1));
        const cv47 = v110;
        const cv48 = stdlib.checkedBigNumberify('./index.rsh:150:47:decimal', stdlib.UInt_max, 0);
        const cv136 = v104;
        const cv138 = v66;
        
        v47 = cv47;
        v48 = cv48;
        v136 = cv136;
        v138 = cv138;
        
        continue;}}
    else {
      const cv47 = v47;
      const cv48 = stdlib.checkedBigNumberify('./index.rsh:153:47:decimal', stdlib.UInt_max, 1);
      const cv136 = v104;
      const cv138 = v66;
      
      v47 = cv47;
      v48 = cv48;
      v136 = cv136;
      v138 = cv138;
      
      continue;}
    
    
    
    
    }
  const v114 = stdlib.protect(ctc0, await interact.getSubscriberLastBalance(), {
    at: './index.rsh:162:87:application',
    fs: ['at ./index.rsh:161:22:application call to [unknown function] (defined at: ./index.rsh:161:26:function exp)'],
    msg: 'getSubscriberLastBalance',
    who: 'Subscriber'
    });
  
  
  const txn5 = await (ctc.sendrecv(7, 1, stdlib.checkedBigNumberify('./index.rsh:164:18:dot', stdlib.UInt_max, 2), [ctc5, ctc5, ctc0, ctc0, ctc0], [v19, v27, v136, v138, v114], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [ctc0], true, true, false, (async (txn5) => {
    const sim_r = { txns: [] };
    sim_r.prevSt = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:164:18:dot', stdlib.UInt_max, 6), v19, v27, v136, v138]);
    sim_r.prevSt_noPrevTime = stdlib.digest(ctc9, [stdlib.checkedBigNumberify('./index.rsh:164:18:dot', stdlib.UInt_max, 6), v19, v27, v138]);
    const [v116] = txn5.data;
    const v119 = txn5.time;
    const v115 = txn5.from;
    
    sim_r.txns.push({
      amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
      kind: 'to',
      tok: undefined
      });
    const v118 = stdlib.addressEq(v19, v115);
    stdlib.assert(v118, {
      at: './index.rsh:164:18:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Subscriber'
      });
    sim_r.txns.push({
      amt: v138,
      kind: 'from',
      to: v27,
      tok: undefined
      });
    sim_r.nextSt = stdlib.digest(ctc13, [stdlib.checkedBigNumberify('./index.rsh:166:15:after expr stmt semicolon', stdlib.UInt_max, 7), v27, v119]);
    sim_r.nextSt_noTime = stdlib.digest(ctc14, [stdlib.checkedBigNumberify('./index.rsh:166:15:after expr stmt semicolon', stdlib.UInt_max, 7), v27]);
    sim_r.view = [ctc4, [stdlib.checkedBigNumberify('./index.rsh:166:15:after expr stmt semicolon', stdlib.UInt_max, 0)]];
    sim_r.isHalt = false;
    
    return sim_r;
    })));
  const [v116] = txn5.data;
  const v119 = txn5.time;
  const v115 = txn5.from;
  ;
  const v118 = stdlib.addressEq(v19, v115);
  stdlib.assert(v118, {
    at: './index.rsh:164:18:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Subscriber'
    });
  ;
  const txn6 = await (ctc.recv(8, 1, [ctc0], false, false));
  const [v130] = txn6.data;
  const v133 = txn6.time;
  const v129 = txn6.from;
  ;
  const v132 = stdlib.addressEq(v27, v129);
  stdlib.assert(v132, {
    at: './index.rsh:171:24:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Subscriber'
    });
  return;
  
  
  
  
  
  
  };

const _ALGO = {
  appApproval: `#pragma version 3
// Check that we're an App
txn TypeEnum
int appl
==
assert
txn RekeyTo
global ZeroAddress
==
assert
// Check that everyone's here
global GroupSize
int 3
>=
assert
// Check txnAppl (us)
txn GroupIndex
int 0
==
assert
// Check txnFromHandler
int 0
gtxn 2 Sender
byte "{{m1}}"
==
||
gtxn 2 Sender
byte "{{m2}}"
==
||
gtxn 2 Sender
byte "{{m3}}"
==
||
gtxn 2 Sender
byte "{{m4}}"
==
||
gtxn 2 Sender
byte "{{m7}}"
==
||
gtxn 2 Sender
byte "{{m8}}"
==
||
gtxn 2 Sender
byte "{{m9}}"
==
||
gtxn 2 Sender
byte "{{m10}}"
==
||
gtxn 2 Sender
byte "{{m11}}"
==
||
gtxn 2 Sender
byte "{{m12}}"
==
||
gtxn 2 Sender
byte "{{m13}}"
==
||
assert
byte base64(cw==)
app_global_get
gtxna 0 ApplicationArgs 0
==
assert
byte base64(bA==)
app_global_get
gtxna 0 ApplicationArgs 5
btoi
==
assert
// Don't check anyone else, because Handler does
// Update state
byte base64(cw==)
gtxna 0 ApplicationArgs 1
app_global_put
byte base64(bA==)
global Round
app_global_put
byte base64(dg==)
gtxna 0 ApplicationArgs 2
app_global_put
byte base64(aA==)
gtxna 0 ApplicationArgs 3
btoi
app_global_put
byte base64(aA==)
app_global_get
bnz halted
txn OnCompletion
int NoOp
==
assert
b done
halted:
txn OnCompletion
int DeleteApplication
==
assert
done:
int 1
return
`,
  appApproval0: `#pragma version 3
// Check that we're an App
txn TypeEnum
int appl
==
assert
txn RekeyTo
global ZeroAddress
==
assert
txn Sender
byte "{{Deployer}}"
==
assert
txn ApplicationID
bz init
global GroupSize
int 2
==
assert
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Amount
int 100000
==
assert
// We don't check the receiver, because we don't know it yet, because the escrow account embeds our id
// We don't check the sender, because we don't care... anyone is allowed to fund it. We'll give it back to the deployer, though.
txn OnCompletion
int UpdateApplication
==
assert
byte base64(cw==)
// compute state in HM_Set 0
int 0
itob
keccak256
app_global_put
byte base64(bA==)
global Round
app_global_put
byte base64(dg==)
byte base64()
app_global_put
byte base64(aA==)
int 0
app_global_put
b done
init:
global GroupSize
int 1
==
assert
txn OnCompletion
int NoOp
==
assert
done:
int 1
return
`,
  appClear: `#pragma version 3
// We're alone
global GroupSize
int 1
==
assert
// We're halted
byte base64(aA==)
app_global_get
int 1
==
assert
done:
int 1
return
`,
  ctc: `#pragma version 3
// Check size
global GroupSize
int 3
>=
assert
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
// Don't check anything else, because app does
// Check us
txn TypeEnum
int pay
==
int axfer
dup2
==
||
assert
txn RekeyTo
global ZeroAddress
==
assert
txn GroupIndex
int 3
>=
assert
done:
int 1
return
`,
  stepargs: [null, {
    count: 6,
    size: 89
    }, {
    count: 8,
    size: 129
    }, {
    count: 10,
    size: 169
    }, {
    count: 10,
    size: 169
    }, null, null, {
    count: 10,
    size: 169
    }, {
    count: 8,
    size: 129
    }, {
    count: 13,
    size: 193
    }, {
    count: 12,
    size: 185
    }, {
    count: 14,
    size: 194
    }, {
    count: 14,
    size: 194
    }, {
    count: 15,
    size: 202
    }],
  steps: [null, `#pragma version 3
// Handler 1
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
gtxn 0 NumAppArgs
int 6
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
int 100000
+
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
// compute state in HM_Check 0
int 0
itob
keccak256
gtxna 0 ApplicationArgs 0
==
assert
txn CloseRemainderTo
gtxn 1 Sender
==
assert
// Run body
// "CheckPay"
// "./index.rsh:46:18:dot"
// "[]"
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
gtxn 3 Amount
gtxna 0 ApplicationArgs 4
btoi
==
assert
// We don't care who the sender is... this means that you can get other people to pay for you if you want.
// check view bs
int 0
itob
gtxna 0 ApplicationArgs 2
==
assert
// compute state in HM_Set 1
int 1
itob
gtxn 0 Sender
concat
keccak256
gtxna 0 ApplicationArgs 1
==
assert
gtxna 0 ApplicationArgs 3
btoi
int 0
==
assert
b done
// Check GroupSize
global GroupSize
int 4
==
assert
gtxna 0 ApplicationArgs 4
btoi
int 0
==
assert
// Check time limits
done:
int 1
return
`, `#pragma version 3
gtxna 0 ApplicationArgs 6
store 255
gtxna 0 ApplicationArgs 7
btoi
store 254
// Handler 2
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
gtxn 0 NumAppArgs
int 8
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
int 100000
+
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
// compute state in HM_Check 1
int 1
itob
load 255
concat
keccak256
gtxna 0 ApplicationArgs 0
==
assert
txn CloseRemainderTo
gtxn 1 Sender
==
assert
// Run body
// "CheckPay"
// "./index.rsh:55:24:dot"
// "[]"
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
gtxn 3 Amount
gtxna 0 ApplicationArgs 4
btoi
==
assert
// We don't care who the sender is... this means that you can get other people to pay for you if you want.
// check view bs
int 0
itob
gtxna 0 ApplicationArgs 2
==
assert
// compute state in HM_Set 2
int 2
itob
load 255
concat
gtxn 0 Sender
concat
load 254
itob
concat
keccak256
gtxna 0 ApplicationArgs 1
==
assert
gtxna 0 ApplicationArgs 3
btoi
int 0
==
assert
b done
// Check GroupSize
global GroupSize
int 4
==
assert
gtxna 0 ApplicationArgs 4
btoi
int 0
==
assert
// Check time limits
done:
int 1
return
`, `#pragma version 3
gtxna 0 ApplicationArgs 6
store 255
gtxna 0 ApplicationArgs 7
store 254
gtxna 0 ApplicationArgs 8
btoi
store 253
gtxna 0 ApplicationArgs 9
btoi
store 252
// Handler 3
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
gtxn 0 NumAppArgs
int 10
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
int 100000
+
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
// compute state in HM_Check 2
int 2
itob
load 255
concat
load 254
concat
load 253
itob
concat
keccak256
gtxna 0 ApplicationArgs 0
==
assert
txn CloseRemainderTo
gtxn 1 Sender
==
assert
// Run body
// "CheckPay"
// "./index.rsh:63:18:dot"
// "[]"
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
gtxn 3 Amount
gtxna 0 ApplicationArgs 4
btoi
==
assert
// We don't care who the sender is... this means that you can get other people to pay for you if you want.
// Just "sender correct"
// "./index.rsh:63:18:dot"
// "[]"
load 255
gtxn 0 Sender
==
assert
// check view bs
int 0
itob
gtxna 0 ApplicationArgs 2
==
assert
// compute state in HM_Set 3
int 3
itob
load 255
concat
load 254
concat
load 253
itob
concat
load 252
itob
concat
keccak256
gtxna 0 ApplicationArgs 1
==
assert
gtxna 0 ApplicationArgs 3
btoi
int 0
==
assert
b done
// Check GroupSize
global GroupSize
int 4
==
assert
gtxna 0 ApplicationArgs 4
btoi
int 0
==
assert
// Check time limits
done:
int 1
return
`, `#pragma version 3
gtxna 0 ApplicationArgs 6
store 255
gtxna 0 ApplicationArgs 7
store 254
gtxna 0 ApplicationArgs 8
btoi
store 253
gtxna 0 ApplicationArgs 9
btoi
store 252
// Handler 4
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
gtxn 0 NumAppArgs
int 10
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
int 100000
+
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
// compute state in HM_Check 3
int 3
itob
load 255
concat
load 254
concat
load 253
itob
concat
load 252
itob
concat
keccak256
gtxna 0 ApplicationArgs 0
==
assert
txn CloseRemainderTo
gtxn 1 Sender
==
assert
// Run body
// "CheckPay"
// "./index.rsh:83:18:dot"
// "[]"
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
gtxn 3 Amount
gtxna 0 ApplicationArgs 4
btoi
==
assert
// We don't care who the sender is... this means that you can get other people to pay for you if you want.
// Just "sender correct"
// "./index.rsh:83:18:dot"
// "[]"
load 255
gtxn 0 Sender
==
assert
int 0
int 0
==
bz l0
// check view bs
int 0
itob
gtxna 0 ApplicationArgs 2
==
assert
// compute state in HM_Set 5
int 5
itob
load 255
concat
load 254
concat
load 253
itob
concat
load 252
itob
concat
int 0
itob
concat
int 0
itob
concat
keccak256
gtxna 0 ApplicationArgs 1
==
assert
gtxna 0 ApplicationArgs 3
btoi
int 0
==
assert
b done
// Check GroupSize
global GroupSize
int 4
==
assert
gtxna 0 ApplicationArgs 4
btoi
int 0
==
assert
// Check time limits
l0:
// check view bs
int 0
itob
gtxna 0 ApplicationArgs 2
==
assert
// compute state in HM_Set 6
int 6
itob
load 255
concat
load 254
concat
int 0
itob
concat
keccak256
gtxna 0 ApplicationArgs 1
==
assert
gtxna 0 ApplicationArgs 3
btoi
int 0
==
assert
b done
// Check GroupSize
global GroupSize
int 4
==
assert
gtxna 0 ApplicationArgs 4
btoi
int 0
==
assert
// Check time limits
done:
int 1
return
`, null, null, `#pragma version 3
gtxna 0 ApplicationArgs 6
store 255
gtxna 0 ApplicationArgs 7
store 254
gtxna 0 ApplicationArgs 8
btoi
store 253
gtxna 0 ApplicationArgs 9
btoi
store 252
// Handler 7
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
gtxn 0 NumAppArgs
int 10
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
int 100000
+
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
// compute state in HM_Check 6
int 6
itob
load 255
concat
load 254
concat
load 253
itob
concat
keccak256
gtxna 0 ApplicationArgs 0
==
assert
txn CloseRemainderTo
gtxn 1 Sender
==
assert
// Run body
// "CheckPay"
// "./index.rsh:164:18:dot"
// "[]"
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
gtxn 3 Amount
gtxna 0 ApplicationArgs 4
btoi
==
assert
// We don't care who the sender is... this means that you can get other people to pay for you if you want.
// Just "sender correct"
// "./index.rsh:164:18:dot"
// "[]"
load 255
gtxn 0 Sender
==
assert
gtxn 4 TypeEnum
int pay
==
assert
gtxn 4 Receiver
load 254
==
assert
gtxn 4 Amount
load 253
==
assert
gtxn 4 Sender
byte "{{ContractAddr}}"
==
assert
// check view bs
int 0
itob
gtxna 0 ApplicationArgs 2
==
assert
// compute state in HM_Set 7
int 7
itob
load 254
concat
keccak256
gtxna 0 ApplicationArgs 1
==
assert
gtxna 0 ApplicationArgs 3
btoi
int 0
==
assert
b done
// Check GroupSize
global GroupSize
int 5
==
assert
gtxna 0 ApplicationArgs 4
btoi
gtxn 4 Fee
==
assert
// Check time limits
done:
int 1
return
`, `#pragma version 3
gtxna 0 ApplicationArgs 6
store 255
gtxna 0 ApplicationArgs 7
btoi
store 254
// Handler 8
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
gtxn 0 NumAppArgs
int 8
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
int 100000
+
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
// compute state in HM_Check 7
int 7
itob
load 255
concat
keccak256
gtxna 0 ApplicationArgs 0
==
assert
txn CloseRemainderTo
gtxn 1 Sender
==
assert
// Run body
// "CheckPay"
// "./index.rsh:171:24:dot"
// "[]"
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
gtxn 3 Amount
gtxna 0 ApplicationArgs 4
btoi
==
assert
// We don't care who the sender is... this means that you can get other people to pay for you if you want.
// Just "sender correct"
// "./index.rsh:171:24:dot"
// "[]"
load 255
gtxn 0 Sender
==
assert
// check view bs
int 0
itob
gtxna 0 ApplicationArgs 2
==
assert
gtxn 4 TypeEnum
int pay
==
assert
// We don't check the receiver
gtxn 4 Amount
int 0
==
assert
gtxn 4 Sender
byte "{{ContractAddr}}"
==
assert
gtxn 4 CloseRemainderTo
byte "{{Deployer}}"
==
assert
gtxna 0 ApplicationArgs 3
btoi
int 1
==
assert
b done
// Check GroupSize
global GroupSize
int 5
==
assert
gtxna 0 ApplicationArgs 4
btoi
gtxn 4 Fee
==
assert
// Check time limits
done:
int 1
return
`, `#pragma version 3
gtxna 0 ApplicationArgs 6
store 255
gtxna 0 ApplicationArgs 7
store 254
gtxna 0 ApplicationArgs 8
btoi
store 253
gtxna 0 ApplicationArgs 9
btoi
store 252
gtxna 0 ApplicationArgs 10
btoi
store 251
gtxna 0 ApplicationArgs 11
btoi
store 250
gtxna 0 ApplicationArgs 12
btoi
store 249
// Handler 9
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
gtxn 0 NumAppArgs
int 13
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
int 100000
+
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
// compute state in HM_Check 5
int 5
itob
load 255
concat
load 254
concat
load 253
itob
concat
load 252
itob
concat
load 251
itob
concat
load 250
itob
concat
keccak256
gtxna 0 ApplicationArgs 0
==
assert
txn CloseRemainderTo
gtxn 1 Sender
==
assert
// Run body
// "CheckPay"
// "./index.rsh:103:20:dot"
// "[]"
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
gtxn 3 Amount
gtxna 0 ApplicationArgs 4
btoi
==
assert
// We don't care who the sender is... this means that you can get other people to pay for you if you want.
// Just "sender correct"
// "./index.rsh:103:20:dot"
// "[]"
load 255
gtxn 0 Sender
==
assert
// check view bs
int 0
itob
gtxna 0 ApplicationArgs 2
==
assert
// compute state in HM_Set 9
int 9
itob
load 255
concat
load 254
concat
load 253
itob
concat
load 252
itob
concat
load 251
itob
concat
load 250
itob
concat
keccak256
gtxna 0 ApplicationArgs 1
==
assert
gtxna 0 ApplicationArgs 3
btoi
int 0
==
assert
b done
// Check GroupSize
global GroupSize
int 4
==
assert
gtxna 0 ApplicationArgs 4
btoi
int 0
==
assert
// Check time limits
done:
int 1
return
`, `#pragma version 3
gtxna 0 ApplicationArgs 6
store 255
gtxna 0 ApplicationArgs 7
store 254
gtxna 0 ApplicationArgs 8
btoi
store 253
gtxna 0 ApplicationArgs 9
btoi
store 252
gtxna 0 ApplicationArgs 10
btoi
store 251
gtxna 0 ApplicationArgs 11
btoi
store 250
// Handler 10
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
gtxn 0 NumAppArgs
int 12
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
int 100000
+
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
// compute state in HM_Check 9
int 9
itob
load 255
concat
load 254
concat
load 253
itob
concat
load 252
itob
concat
load 251
itob
concat
load 250
itob
concat
keccak256
gtxna 0 ApplicationArgs 0
==
assert
txn CloseRemainderTo
gtxn 1 Sender
==
assert
// Run body
load 250
load 252
+
store 249
// "CheckPay"
// "./index.rsh:109:20:dot"
// "[]"
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
gtxn 3 Amount
gtxna 0 ApplicationArgs 4
btoi
-
load 252
==
assert
// We don't care who the sender is... this means that you can get other people to pay for you if you want.
// Just "sender correct"
// "./index.rsh:109:20:dot"
// "[]"
load 255
gtxn 0 Sender
==
assert
// check view bs
int 0
itob
gtxna 0 ApplicationArgs 2
==
assert
// compute state in HM_Set 10
int 10
itob
load 255
concat
load 254
concat
load 253
itob
concat
load 252
itob
concat
load 251
itob
concat
load 249
itob
concat
keccak256
gtxna 0 ApplicationArgs 1
==
assert
gtxna 0 ApplicationArgs 3
btoi
int 0
==
assert
b done
// Check GroupSize
global GroupSize
int 4
==
assert
gtxna 0 ApplicationArgs 4
btoi
int 0
==
assert
// Check time limits
gtxna 0 ApplicationArgs 5
btoi
int 2
+
dup
gtxn 0 FirstValid
==
assert
dup
gtxn 1 FirstValid
==
assert
dup
gtxn 2 FirstValid
==
assert
dup
gtxn 3 FirstValid
==
assert
pop
done:
int 1
return
`, `#pragma version 3
gtxna 0 ApplicationArgs 6
store 255
gtxna 0 ApplicationArgs 7
store 254
gtxna 0 ApplicationArgs 8
btoi
store 253
gtxna 0 ApplicationArgs 9
btoi
store 252
gtxna 0 ApplicationArgs 10
btoi
store 251
gtxna 0 ApplicationArgs 11
btoi
store 250
gtxna 0 ApplicationArgs 12
btoi
store 249
gtxna 0 ApplicationArgs 13
btoi
store 248
// Handler 11
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
gtxn 0 NumAppArgs
int 14
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
int 100000
+
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
// compute state in HM_Check 10
int 10
itob
load 255
concat
load 254
concat
load 253
itob
concat
load 252
itob
concat
load 251
itob
concat
load 250
itob
concat
keccak256
gtxna 0 ApplicationArgs 0
==
assert
txn CloseRemainderTo
gtxn 1 Sender
==
assert
// Run body
// "CheckPay"
// "./index.rsh:119:20:dot"
// "[]"
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
gtxn 3 Amount
gtxna 0 ApplicationArgs 4
btoi
==
assert
// We don't care who the sender is... this means that you can get other people to pay for you if you want.
// Just "sender correct"
// "./index.rsh:119:20:dot"
// "[]"
load 255
gtxn 0 Sender
==
assert
// Nothing
// "./index.rsh:120:16:application"
// "[]"
load 248
load 250
<=
assert
// check view bs
int 0
itob
gtxna 0 ApplicationArgs 2
==
assert
// compute state in HM_Set 11
int 11
itob
load 255
concat
load 254
concat
load 253
itob
concat
load 252
itob
concat
load 251
itob
concat
load 250
itob
concat
load 248
itob
concat
keccak256
gtxna 0 ApplicationArgs 1
==
assert
gtxna 0 ApplicationArgs 3
btoi
int 0
==
assert
b done
// Check GroupSize
global GroupSize
int 4
==
assert
gtxna 0 ApplicationArgs 4
btoi
int 0
==
assert
// Check time limits
done:
int 1
return
`, `#pragma version 3
gtxna 0 ApplicationArgs 6
store 255
gtxna 0 ApplicationArgs 7
store 254
gtxna 0 ApplicationArgs 8
btoi
store 253
gtxna 0 ApplicationArgs 9
btoi
store 252
gtxna 0 ApplicationArgs 10
btoi
store 251
gtxna 0 ApplicationArgs 11
btoi
store 250
gtxna 0 ApplicationArgs 12
btoi
store 249
gtxna 0 ApplicationArgs 13
btoi
store 248
// Handler 12
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
gtxn 0 NumAppArgs
int 14
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
int 100000
+
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
// compute state in HM_Check 11
int 11
itob
load 255
concat
load 254
concat
load 253
itob
concat
load 252
itob
concat
load 251
itob
concat
load 250
itob
concat
load 249
itob
concat
keccak256
gtxna 0 ApplicationArgs 0
==
assert
txn CloseRemainderTo
gtxn 1 Sender
==
assert
// Run body
// "CheckPay"
// "./index.rsh:126:26:dot"
// "[]"
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
gtxn 3 Amount
gtxna 0 ApplicationArgs 4
btoi
==
assert
// We don't care who the sender is... this means that you can get other people to pay for you if you want.
// Just "sender correct"
// "./index.rsh:126:26:dot"
// "[]"
load 254
gtxn 0 Sender
==
assert
// check view bs
int 0
itob
gtxna 0 ApplicationArgs 2
==
assert
// compute state in HM_Set 12
int 12
itob
load 255
concat
load 254
concat
load 253
itob
concat
load 252
itob
concat
load 251
itob
concat
load 250
itob
concat
load 249
itob
concat
load 248
itob // bool
substring 7 8
concat
keccak256
gtxna 0 ApplicationArgs 1
==
assert
gtxna 0 ApplicationArgs 3
btoi
int 0
==
assert
b done
// Check GroupSize
global GroupSize
int 4
==
assert
gtxna 0 ApplicationArgs 4
btoi
int 0
==
assert
// Check time limits
done:
int 1
return
`, `#pragma version 3
gtxna 0 ApplicationArgs 6
store 255
gtxna 0 ApplicationArgs 7
store 254
gtxna 0 ApplicationArgs 8
btoi
store 253
gtxna 0 ApplicationArgs 9
btoi
store 252
gtxna 0 ApplicationArgs 10
btoi
store 251
gtxna 0 ApplicationArgs 11
btoi
store 250
gtxna 0 ApplicationArgs 12
btoi
store 249
gtxna 0 ApplicationArgs 13
btoi
store 248
gtxna 0 ApplicationArgs 14
btoi
store 247
// Handler 13
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
gtxn 0 NumAppArgs
int 15
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
int 100000
+
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
// compute state in HM_Check 12
int 12
itob
load 255
concat
load 254
concat
load 253
itob
concat
load 252
itob
concat
load 251
itob
concat
load 250
itob
concat
load 249
itob
concat
load 248
itob // bool
substring 7 8
concat
keccak256
gtxna 0 ApplicationArgs 0
==
assert
txn CloseRemainderTo
gtxn 1 Sender
==
assert
// Run body
// "CheckPay"
// "./index.rsh:141:20:dot"
// "[]"
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
gtxn 3 Amount
gtxna 0 ApplicationArgs 4
btoi
==
assert
// We don't care who the sender is... this means that you can get other people to pay for you if you want.
// Just "sender correct"
// "./index.rsh:141:20:dot"
// "[]"
load 255
gtxn 0 Sender
==
assert
load 247
load 253
>=
bz l0
load 248
bz l1
load 250
load 249
-
store 246
gtxn 4 TypeEnum
int pay
==
assert
gtxn 4 Receiver
load 255
==
assert
gtxn 4 Amount
load 249
==
assert
gtxn 4 Sender
byte "{{ContractAddr}}"
==
assert
load 251
int 1
+
store 245
int 0
int 0
==
dup
store 244
bz l2
// check view bs
int 0
itob
gtxna 0 ApplicationArgs 2
==
assert
// compute state in HM_Set 5
int 5
itob
load 255
concat
load 254
concat
load 253
itob
concat
load 252
itob
concat
load 245
itob
concat
load 246
itob
concat
keccak256
gtxna 0 ApplicationArgs 1
==
assert
gtxna 0 ApplicationArgs 3
btoi
int 0
==
assert
b done
// Check GroupSize
global GroupSize
int 5
==
assert
gtxna 0 ApplicationArgs 4
btoi
gtxn 4 Fee
==
assert
// Check time limits
l2:
// check view bs
int 0
itob
gtxna 0 ApplicationArgs 2
==
assert
// compute state in HM_Set 6
int 6
itob
load 255
concat
load 254
concat
load 246
itob
concat
keccak256
gtxna 0 ApplicationArgs 1
==
assert
gtxna 0 ApplicationArgs 3
btoi
int 0
==
assert
b done
// Check GroupSize
global GroupSize
int 5
==
assert
gtxna 0 ApplicationArgs 4
btoi
gtxn 4 Fee
==
assert
// Check time limits
l1:
int 0
int 0
==
dup
store 246
bz l3
// check view bs
int 0
itob
gtxna 0 ApplicationArgs 2
==
assert
// compute state in HM_Set 5
int 5
itob
load 255
concat
load 254
concat
load 253
itob
concat
load 252
itob
concat
load 251
int 1
+
itob
concat
load 250
itob
concat
keccak256
gtxna 0 ApplicationArgs 1
==
assert
gtxna 0 ApplicationArgs 3
btoi
int 0
==
assert
b done
// Check GroupSize
global GroupSize
int 4
==
assert
gtxna 0 ApplicationArgs 4
btoi
gtxn 4 Fee
==
assert
// Check time limits
l3:
// check view bs
int 0
itob
gtxna 0 ApplicationArgs 2
==
assert
// compute state in HM_Set 6
int 6
itob
load 255
concat
load 254
concat
load 250
itob
concat
keccak256
gtxna 0 ApplicationArgs 1
==
assert
gtxna 0 ApplicationArgs 3
btoi
int 0
==
assert
b done
// Check GroupSize
global GroupSize
int 4
==
assert
gtxna 0 ApplicationArgs 4
btoi
gtxn 4 Fee
==
assert
// Check time limits
l0:
int 1
int 0
==
bz l4
// check view bs
int 0
itob
gtxna 0 ApplicationArgs 2
==
assert
// compute state in HM_Set 5
int 5
itob
load 255
concat
load 254
concat
load 253
itob
concat
load 252
itob
concat
load 251
itob
concat
load 250
itob
concat
keccak256
gtxna 0 ApplicationArgs 1
==
assert
gtxna 0 ApplicationArgs 3
btoi
int 0
==
assert
b done
// Check GroupSize
global GroupSize
int 4
==
assert
gtxna 0 ApplicationArgs 4
btoi
gtxn 4 Fee
==
assert
// Check time limits
l4:
// check view bs
int 0
itob
gtxna 0 ApplicationArgs 2
==
assert
// compute state in HM_Set 6
int 6
itob
load 255
concat
load 254
concat
load 250
itob
concat
keccak256
gtxna 0 ApplicationArgs 1
==
assert
gtxna 0 ApplicationArgs 3
btoi
int 0
==
assert
b done
// Check GroupSize
global GroupSize
int 4
==
assert
gtxna 0 ApplicationArgs 4
btoi
gtxn 4 Fee
==
assert
// Check time limits
done:
int 1
return
`],
  unsupported: false
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [],
    "name": "e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v18",
                "type": "uint256"
              }
            ],
            "internalType": "struct T0",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T3",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v19",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v27",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v28",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v38",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v47",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v63",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v138",
                "type": "uint256"
              }
            ],
            "internalType": "struct T22",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T26",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e10",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v19",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v27",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v28",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v38",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v47",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v66",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v68",
                "type": "uint256"
              }
            ],
            "internalType": "struct T25",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v79",
                "type": "bool"
              },
              {
                "internalType": "uint256",
                "name": "v80",
                "type": "uint256"
              }
            ],
            "internalType": "struct T28",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T29",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e11",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v19",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v27",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v28",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v38",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v47",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v66",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v80",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v83",
                "type": "uint256"
              }
            ],
            "internalType": "struct T27",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v92",
                "type": "bool"
              }
            ],
            "internalType": "struct T31",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T32",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e12",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v19",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v27",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v28",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v38",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v47",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v66",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v80",
                "type": "uint256"
              },
              {
                "internalType": "bool",
                "name": "v92",
                "type": "bool"
              },
              {
                "internalType": "uint256",
                "name": "v95",
                "type": "uint256"
              }
            ],
            "internalType": "struct T30",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v101",
                "type": "uint256"
              }
            ],
            "internalType": "struct T33",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T34",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e13",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v19",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v21",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v28",
                "type": "uint256"
              }
            ],
            "internalType": "struct T5",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T6",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v19",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v27",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v28",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v30",
                "type": "uint256"
              }
            ],
            "internalType": "struct T4",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v38",
                "type": "uint256"
              }
            ],
            "internalType": "struct T8",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e3",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v19",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v27",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v28",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v38",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v41",
                "type": "uint256"
              }
            ],
            "internalType": "struct T7",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e4",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v19",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v27",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v136",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v138",
                "type": "uint256"
              }
            ],
            "internalType": "struct T15",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v116",
                "type": "uint256"
              }
            ],
            "internalType": "struct T18",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T19",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e7",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v27",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v119",
                "type": "uint256"
              }
            ],
            "internalType": "struct T17",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v130",
                "type": "uint256"
              }
            ],
            "internalType": "struct T20",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T21",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e8",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v19",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v27",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v28",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v38",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v47",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v136",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v138",
                "type": "uint256"
              }
            ],
            "internalType": "struct T14",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v60",
                "type": "uint256"
              }
            ],
            "internalType": "struct T23",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T24",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e9",
    "type": "event"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v18",
                "type": "uint256"
              }
            ],
            "internalType": "struct T0",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T3",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v19",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v27",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v28",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v38",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v47",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v63",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v138",
                "type": "uint256"
              }
            ],
            "internalType": "struct T22",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T26",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m10",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v19",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v27",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v28",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v38",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v47",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v66",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v68",
                "type": "uint256"
              }
            ],
            "internalType": "struct T25",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v79",
                "type": "bool"
              },
              {
                "internalType": "uint256",
                "name": "v80",
                "type": "uint256"
              }
            ],
            "internalType": "struct T28",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T29",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m11",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v19",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v27",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v28",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v38",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v47",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v66",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v80",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v83",
                "type": "uint256"
              }
            ],
            "internalType": "struct T27",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v92",
                "type": "bool"
              }
            ],
            "internalType": "struct T31",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T32",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m12",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v19",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v27",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v28",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v38",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v47",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v66",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v80",
                "type": "uint256"
              },
              {
                "internalType": "bool",
                "name": "v92",
                "type": "bool"
              },
              {
                "internalType": "uint256",
                "name": "v95",
                "type": "uint256"
              }
            ],
            "internalType": "struct T30",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v101",
                "type": "uint256"
              }
            ],
            "internalType": "struct T33",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T34",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m13",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v19",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v21",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v28",
                "type": "uint256"
              }
            ],
            "internalType": "struct T5",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T6",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v19",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v27",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v28",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v30",
                "type": "uint256"
              }
            ],
            "internalType": "struct T4",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v38",
                "type": "uint256"
              }
            ],
            "internalType": "struct T8",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m3",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v19",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v27",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v28",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v38",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v41",
                "type": "uint256"
              }
            ],
            "internalType": "struct T7",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v19",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v27",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v136",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v138",
                "type": "uint256"
              }
            ],
            "internalType": "struct T15",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v116",
                "type": "uint256"
              }
            ],
            "internalType": "struct T18",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T19",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m7",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v27",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v119",
                "type": "uint256"
              }
            ],
            "internalType": "struct T17",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v130",
                "type": "uint256"
              }
            ],
            "internalType": "struct T20",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T21",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m8",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v19",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v27",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v28",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v38",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v47",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v136",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v138",
                "type": "uint256"
              }
            ],
            "internalType": "struct T14",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v60",
                "type": "uint256"
              }
            ],
            "internalType": "struct T23",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T24",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m9",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060408190527f49ff028a829527a47ec6839c7147b484eccf5a2a94853eddac09cef44d9d4e9e90600090a16040805160208082018352438252825180820184526000808252925181528351808301849052905181850152835180820385018152606090910190935282519201919091209055611b29806100826000396000f3fe6080604052600436106100a05760003560e01c80637fd0e170116100645780637fd0e1701461010d5780638c6758d41461012057806395c797e0146101335780639ba8579814610146578063e292be4b14610159578063e3834e291461016c576100a7565b80630b135172146100ac578063193afc73146100c15780631a20452b146100d45780635819df51146100e75780636e8e5619146100fa576100a7565b366100a757005b600080fd5b6100bf6100ba366004611520565b61017f565b005b6100bf6100cf3660046115a0565b6102d6565b6100bf6100e2366004611572565b610382565b6100bf6100f5366004611572565b61057e565b6100bf61010836600461153b565b610721565b6100bf61011b366004611556565b610805565b6100bf61012e366004611556565b6109d0565b6100bf610141366004611520565b610b3b565b6100bf61015436600461150f565b610cbb565b6100bf61016736600461153b565b610dee565b6100bf61017a36600461158e565b610e96565b604051610193906006908390602001611951565b6040516020818303038152906040528051906020012060001c600054146101b957600080fd5b6000805534156101c857600080fd5b336101d660208301836114d4565b6001600160a01b0316146101e957600080fd5b6101f960408201602083016114d4565b6040516001600160a01b039190911690606083013580156108fc02916000818181858888f19350505050158015610234573d6000803e3d6000fd5b507fa988078faea6ca7d6966e3f1588ee7bac6a63574f61e4a42288d641d8050fd2b8160405161026491906117c2565b60405180910390a1604080518082019091526000808252602082015261029060408301602084016114d4565b6001600160a01b03168152436020808301919091526040516102b7916007918491016119b9565b60408051601f1981840301815291905280516020909101206000555050565b60408051600060208201528235918101919091526060016040516020818303038152906040528051906020012060001c6000541461031357600080fd5b60008055341561032257600080fd5b7fc32df0ce290a4082d696e286eb47ee901bff58c6d9bf2b65b404efaab9a729c78160405161035191906118bb565b60405180910390a160408051808201825233815243602080830191909152915190916102b7916001918491016119b9565b60405161039690600a9083906020016118dc565b6040516020818303038152906040528051906020012060001c600054146103bc57600080fd5b6000805534156103cb57600080fd5b336103d960208301836114d4565b6001600160a01b0316146103ec57600080fd5b60a0810135610100820135111561040257600080fd5b7f5b132f03aa44f779053a11acf9bb50fa5a2c56f76e8db0ffc487aa3d84f9861781604051610431919061183f565b60405180910390a161049360405180610100016040528060006001600160a01b0316815260200160006001600160a01b031681526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6104a060208301836114d4565b6001600160a01b031681526104bb60408301602084016114d4565b6001600160a01b031660208083019190915260408084013581840152606080850135908401526080808501359084015260a0808501359084015261010084013560c08401524360e0840152516102b791600b9184910160006101208201905083825260018060a01b03808451166020840152806020850151166040840152506040830151606083015260608301516080830152608083015160a083015260a083015160c083015260c083015160e083015260e08301516101008301529392505050565b60405161059290600b9083906020016119e0565b6040516020818303038152906040528051906020012060001c600054146105b857600080fd5b6000805534156105c757600080fd5b336105d860408301602084016114d4565b6001600160a01b0316146105eb57600080fd5b7fbc1df69121fa762f3f2aa8291ce7db30196ad9e94fc054578f055b9c00ff23d98160405161061a9190611873565b60405180910390a161068560405180610120016040528060006001600160a01b0316815260200160006001600160a01b031681526020016000815260200160008152602001600081526020016000815260200160008152602001600015158152602001600081525090565b61069260208301836114d4565b6001600160a01b031681526106ad60408301602084016114d4565b6001600160a01b0316602082015260408083013590820152606080830135908201526080808301359082015260a0808301359082015260c080830135908201526106ff610120830161010084016114f5565b151560e0820152436101008201526040516102b790600c908390602001611a0a565b6040516107359060019083906020016119a5565b6040516020818303038152906040528051906020012060001c6000541461075b57600080fd5b60008055341561076a57600080fd5b7f0e4ad6219b4310649026b1c59e6f6907694fdf36fdfc8bbad9fa5fd6faca000d8160405161079991906117de565b60405180910390a160408051608081018252600080825260208083018290529282018190526060820152906107d0908301836114d4565b6001600160a01b031681523360208083019190915260408084013581840152436060840152516102b791600291849101611965565b6040516108199060099083906020016118dc565b6040516020818303038152906040528051906020012060001c6000541461083f57600080fd5b60008080556040805160208101909152908152610861600260a0840135611aae565b43101561086d57600080fd5b61087f606083013560c0840135611aae565b81523460608301351461089157600080fd5b3361089f60208401846114d4565b6001600160a01b0316146108b257600080fd5b7f0d95881d9252c9dda882bc9c63232602f01d371bc35d21e8df753493cd543298826040516108e19190611817565b60405180910390a161093b6040518060e0016040528060006001600160a01b0316815260200160006001600160a01b0316815260200160008152602001600081526020016000815260200160008152602001600081525090565b61094860208401846114d4565b6001600160a01b0316815261096360408401602085016114d4565b6001600160a01b0316602080830191909152604080850135818401526060808601359084015260808086013590840152835160a08401524360c0840152516109b091600a918491016118f1565b60408051601f198184030181529190528051602090910120600055505050565b6040516109e49060059083906020016118dc565b6040516020818303038152906040528051906020012060001c60005414610a0a57600080fd5b600080553415610a1957600080fd5b33610a2760208301836114d4565b6001600160a01b031614610a3a57600080fd5b7f9eca752de8a72b9eeff2c6e67c090b86243876dcf1f433c00f3259c732cb3e0b81604051610a6991906117fa565b60405180910390a1610ac36040518060e0016040528060006001600160a01b0316815260200160006001600160a01b0316815260200160008152602001600081526020016000815260200160008152602001600081525090565b610ad060208301836114d4565b6001600160a01b03168152610aeb60408301602084016114d4565b6001600160a01b03166020808301919091526040808401358184015260608085013590840152608080850135908401524360a084015260c08085013590840152516102b7916009918491016118f1565b604051610b4f906002908390602001611951565b6040516020818303038152906040528051906020012060001c60005414610b7557600080fd5b600080553415610b8457600080fd5b33610b9260208301836114d4565b6001600160a01b031614610ba557600080fd5b7f9aad5170acd71d926fddf6420516ffc9f8698fae35b444dda08faea2b2b5858681604051610bd491906117c2565b60405180910390a1610c206040518060a0016040528060006001600160a01b0316815260200160006001600160a01b031681526020016000815260200160008152602001600081525090565b610c2d60208301836114d4565b6001600160a01b03168152610c4860408301602084016114d4565b6001600160a01b039081166020838101918252604085810135818601908152608080880135606080890191825243838a01908152855160039781019790975289518916958701959095529551909616948401949094525192820192909252915160a08301525160c082015260e0016102b7565b604051610ccf906003908390602001611a9a565b6040516020818303038152906040528051906020012060001c60005414610cf557600080fd5b600080553415610d0457600080fd5b33610d1260208301836114d4565b6001600160a01b031614610d2557600080fd5b7f257365f1f844c7e77e8a2340dc9b3263ecebb82ab938d07e700cb9e982701d0f81604051610d54919061179b565b60405180910390a1610d646113a2565b610d7160208301836114d4565b81516001600160a01b039091169052610d9060408301602084016114d4565b81516001600160a01b039091166020918201528151604080850135918101919091528251606080860135918101919091528284018051600090819052815190940184905280514393019290925290510152610dea8161121a565b5050565b604051610e029060079083906020016119a5565b6040516020818303038152906040528051906020012060001c60005414610e2857600080fd5b600080553415610e3757600080fd5b33610e4560208301836114d4565b6001600160a01b031614610e5857600080fd5b7f671bcaa67ec5d91968bcc13fd8badbb5af994c0e2af507ad3b5bcb63f455fb3081604051610e8791906117de565b60405180910390a16000805533ff5b604051610eaa90600c9083906020016119f5565b6040516020818303038152906040528051906020012060001c60005414610ed057600080fd5b600080805560408051602081019091529081523415610eee57600080fd5b33610efc60208401846114d4565b6001600160a01b031614610f0f57600080fd5b60408201356101208301351061114757610f30610100830160e084016114f5565b1561106d57610f4260208301836114d4565b6040516001600160a01b03919091169060c084013580156108fc02916000818181858888f19350505050158015610f7d573d6000803e3d6000fd5b50610f8d60016080840135611aae565b81526040517f9f0e7afac34903e276697e90f63c0c6187d6cac4f96469ef42f96f060f74603d90610fbf90849061189d565b60405180910390a1610fcf6113a2565b610fdc60208401846114d4565b81516001600160a01b039091169052610ffb60408401602085016114d4565b81516001600160a01b03909116602091820152815160408086013591810191909152825160608087013591015283518284018051919091528051600093019290925290514391015261105560c084013560a0850135611ac6565b6020820151606001526110678161121a565b50611142565b7f9f0e7afac34903e276697e90f63c0c6187d6cac4f96469ef42f96f060f74603d8260405161109c919061189d565b60405180910390a16110ac6113a2565b6110b960208401846114d4565b81516001600160a01b0390911690526110d860408401602085016114d4565b81516001600160a01b039091166020909101528051604080850135910152805160608085013591015261111060016080850135611aae565b6020808301805192909252815160009101528051436040909101525160a08401356060909101526111408161121a565b505b610dea565b7f9f0e7afac34903e276697e90f63c0c6187d6cac4f96469ef42f96f060f74603d82604051611176919061189d565b60405180910390a16111866113a2565b61119360208401846114d4565b81516001600160a01b0390911690526111b260408401602085016114d4565b81516001600160a01b0390911660209182015281516040808601359181019190915282516060808701359181019190915282840180516080880135905280516001940193909352825143920191909152905160a08501359101526112158161121a565b505050565b60208082015101516112fd576112786040518060e0016040528060006001600160a01b0316815260200160006001600160a01b0316815260200160008152602001600081526020016000815260200160008152602001600081525090565b8151516001600160a01b0390811682528251602090810151909116818301528251604090810151818401528351606090810151818501528285018051516080860152805183015160a086015251015160c0840152516112dc916005918491016118f1565b60408051601f19818403018152919052805160209091012060005550611350565b611305611402565b81515181516001600160a01b039182169052825160209081015183519216918101919091528201805160409081015183519091015251606090810151825190910152610dea81611353565b50565b61135b611422565b8151516001600160a01b039081168252825160209081015190911681830152825160409081015181840152835160609081015190840152516102b791600691849101611965565b6040805160c0810182526000918101828152606082018390526080820183905260a082019290925290819081526020016113fd6040518060800160405280600081526020016000815260200160008152602001600081525090565b905290565b6040518060400160405280611415611422565b8152600060209091015290565b604051806080016040528060006001600160a01b0316815260200160006001600160a01b0316815260200160008152602001600081525090565b80356001600160a01b038116811461147357600080fd5b919050565b8035801515811461147357600080fd5b600060a08284031215611499578081fd5b50919050565b600060608284031215611499578081fd5b60006101008284031215611499578081fd5b60006101208284031215611499578081fd5b6000602082840312156114e5578081fd5b6114ee8261145c565b9392505050565b600060208284031215611506578081fd5b6114ee82611478565b600060c08284031215611499578081fd5b600060a08284031215611531578081fd5b6114ee8383611488565b60006060828403121561154c578081fd5b6114ee838361149f565b60006101008284031215611568578081fd5b6114ee83836114b0565b60006101208284031215611584578081fd5b6114ee83836114c2565b60006101408284031215611499578081fd5b600060408284031215611499578081fd5b6001600160a01b03806115c38361145c565b168352806115d36020840161145c565b1660208401525060408101356040830152606081013560608301526080810135608083015260a081013560a083015260c081013560c08301525050565b6001600160a01b03806116228361145c565b168352806116326020840161145c565b1660208401525060408181013590830152606090810135910152565b6001600160a01b0361165f8261145c565b168252602090810135910152565b6001600160a01b038061167f8361145c565b1683528061168f6020840161145c565b1660208401525060408101356040830152606081013560608301526080810135608083015260a081013560a083015260c081013560c083015260e081013560e08301525050565b6001600160a01b03806116e88361145c565b168352806116f86020840161145c565b1660208401525060408101356040830152606081013560608301526080810135608083015260a081013560a083015260c081013560c083015261173d60e08201611478565b151560e083015261010090810135910152565b6001600160a01b03806117628361145c565b168352806117726020840161145c565b166020840152506040810135604083015260608101356060830152608081013560808301525050565b60c081016117a98284611750565b6117b560a08401611478565b151560a083015292915050565b60a081016117d08284611610565b608092830135919092015290565b606081016117ec828461164e565b604092830135919092015290565b610100810161180982846115b1565b60e092830135919092015290565b610100810161182682846115b1565b61183260e08401611478565b151560e083015292915050565b610120810161184e82846115b1565b61185a60e08401611478565b151560e083015261010080840135818401525092915050565b6101208101611882828461166d565b610100611890818501611478565b1515818401525092915050565b61014081016118ac82846116d6565b61012092830135919092015290565b81358152604081016118cf60208401611478565b1515602083015292915050565b82815261010081016114ee60208301846115b1565b82815261010081016114ee602083018460018060a01b038082511683528060208301511660208401525060408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c08301525050565b82815260a081016114ee6020830184611610565b82815260a081016114ee602083018480516001600160a01b0390811683526020808301519091169083015260408082015190830152606090810151910152565b828152606081016114ee602083018461164e565b828152606081016114ee602083018480516001600160a01b03168252602090810151910152565b82815261012081016114ee602083018461166d565b82815261014081016114ee60208301846116d6565b82815281516001600160a01b0316602080830191909152820151610140820190611a3f60408401826001600160a01b03169052565b506040830151606083015260608301516080830152608083015160a083015260a083015160c083015260c083015160e083015260e0830151610100611a878185018315159052565b8085015161012085015250509392505050565b82815260c081016114ee6020830184611750565b60008219821115611ac157611ac1611add565b500190565b600082821015611ad857611ad8611add565b500390565b634e487b7160e01b600052601160045260246000fdfea2646970667358221220583c701878ff401465ae65318bad8f060272025db66e6643443908a520923e0364736f6c63430008020033`,
  deployMode: `DM_constructor`,
  views: {
    }
  };

export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };

