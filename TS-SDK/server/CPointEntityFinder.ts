// generated - do not edit!

import {server_CBaseEntity} from './CBaseEntity';
// Class size: 0x4E8
// BaseClass: : public CS2::server::CBaseEntity
export const server_CPointEntityFinder  = {
	...server_CBaseEntity,
	m_hEntity: 1192n, // GlobalTypes::CHandle<server::CBaseEntity>  | Schema_Atomic | Size: 0x4
	m_iFilterName: 1200n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_hFilter: 1208n, // GlobalTypes::CHandle<server::CBaseFilter>  | Schema_Atomic | Size: 0x4
	m_iRefName: 1216n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_hReference: 1224n, // GlobalTypes::CHandle<server::CBaseEntity>  | Schema_Atomic | Size: 0x4
	m_FindMethod: 1228n, // server::EntFinderMethod_t  | Schema_DeclaredEnum | Size: 0x4
	m_OnFoundEntity: 1232n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x18
}
