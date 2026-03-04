// generated - do not edit!

import {server_CTriggerMultiple} from './CTriggerMultiple';
// Class size: 0x8E0
// BaseClass: : public CS2::server::CTriggerMultiple
export const server_CDynamicNavConnectionsVolume  = {
	...server_CTriggerMultiple,
	m_iszConnectionTarget: 2216n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_vecConnections: 2224n, // GlobalTypes::CUtlVector<server::DynamicVolumeDef_t>  | Schema_Atomic | Size: 0x18
	m_sTransitionType: 2248n, // GlobalTypes::CGlobalSymbol  | Schema_Atomic | Size: 0x8
	m_bConnectionsEnabled: 2256n, // bool m_bConnectionsEnabled; |  0x8d0 | Schema_Builtin | Size: 0x1
	m_flTargetAreaSearchRadius: 2260n, // float32 m_flTargetAreaSearchRadius; |  0x8d4 | Schema_Builtin | Size: 0x4
	m_flUpdateDistance: 2264n, // float32 m_flUpdateDistance; |  0x8d8 | Schema_Builtin | Size: 0x4
	m_flMaxConnectionDistance: 2268n, // float32 m_flMaxConnectionDistance; |  0x8dc | Schema_Builtin | Size: 0x4
}
