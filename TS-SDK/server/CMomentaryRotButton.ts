// generated - do not edit!

import {server_CRotButton} from './CRotButton';
// Class size: 0x968
// BaseClass: : public CS2::server::CRotButton
export const server_CMomentaryRotButton  = {
	...server_CRotButton,
	m_Position: 2224n, // GlobalTypes::CEntityOutputTemplate  | Schema_Atomic | Size: 0x20
	m_OnUnpressed: 2256n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x18
	m_OnFullyOpen: 2280n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x18
	m_OnFullyClosed: 2304n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x18
	m_OnReachedPosition: 2328n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x18
	m_lastUsed: 2352n, // int32_t m_lastUsed; |  0x930 | Schema_Builtin | Size: 0x4
	m_start: 2356n, // GlobalTypes::QAngle  | Schema_Atomic | Size: 0xc
	m_end: 2368n, // GlobalTypes::QAngle  | Schema_Atomic | Size: 0xc
	m_IdealYaw: 2380n, // float32 m_IdealYaw; |  0x94c | Schema_Builtin | Size: 0x4
	m_sNoise: 2384n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_bUpdateTarget: 2392n, // bool m_bUpdateTarget; |  0x958 | Schema_Builtin | Size: 0x1
	m_direction: 2396n, // int32_t m_direction; |  0x95c | Schema_Builtin | Size: 0x4
	m_returnSpeed: 2400n, // float32 m_returnSpeed; |  0x960 | Schema_Builtin | Size: 0x4
	m_flStartPosition: 2404n, // float32 m_flStartPosition; |  0x964 | Schema_Builtin | Size: 0x4
}
