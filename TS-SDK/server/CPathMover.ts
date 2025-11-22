// generated - do not edit!

import {server_CPathSimple} from './CPathSimple';
// Class size: 0x650
// BaseClass: : public CS2::server::CPathSimple
export const server_CPathMover  = {
	...server_CPathSimple,
	m_vecPathNodes: 1536n, // server::CUtlVector<GlobalTypes::CHandle<server::CMoverPathNode>>  | Schema_Atomic | Size: 0x18
	m_vecMovers: 1560n, // server::CUtlVector<GlobalTypes::CHandle<server::CFuncMover>>  | Schema_Atomic | Size: 0x18
	m_xInitialPathWorldToLocal: 1584n, // GlobalTypes::CTransform  | Schema_Atomic | Size: 0x20
}
