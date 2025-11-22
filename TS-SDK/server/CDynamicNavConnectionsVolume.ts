// generated - do not edit!

import {server_CTriggerMultiple} from './CTriggerMultiple';
// Class size: 0xA08
// BaseClass: : public CS2::server::CTriggerMultiple
export const server_CDynamicNavConnectionsVolume  = {
	...server_CTriggerMultiple,
	m_iszConnectionTarget: 2512n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_vecConnections: 2520n, // GlobalTypes::CUtlVector<server::DynamicVolumeDef_t>  | Schema_Atomic | Size: 0x18
	m_sTransitionType: 2544n, // GlobalTypes::CGlobalSymbol  | Schema_Atomic | Size: 0x8
	m_bConnectionsEnabled: 2552n, // bool m_bConnectionsEnabled; |  0x9f8 | Schema_Builtin | Size: 0x1
	m_flTargetAreaSearchRadius: 2556n, // float32 m_flTargetAreaSearchRadius; |  0x9fc | Schema_Builtin | Size: 0x4
	m_flUpdateDistance: 2560n, // float32 m_flUpdateDistance; |  0xa00 | Schema_Builtin | Size: 0x4
	m_flMaxConnectionDistance: 2564n, // float32 m_flMaxConnectionDistance; |  0xa04 | Schema_Builtin | Size: 0x4
}
