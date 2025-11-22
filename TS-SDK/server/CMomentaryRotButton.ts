// generated - do not edit!

import {server_CRotButton} from './CRotButton';
// Class size: 0xAA8
// BaseClass: : public CS2::server::CRotButton
export const server_CMomentaryRotButton  = {
	...server_CRotButton,
	m_Position: 2472n, // GlobalTypes::CEntityOutputTemplate  | Schema_Atomic | Size: 0x28
	m_OnUnpressed: 2512n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x28
	m_OnFullyOpen: 2552n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x28
	m_OnFullyClosed: 2592n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x28
	m_OnReachedPosition: 2632n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x28
	m_lastUsed: 2672n, // int32_t m_lastUsed; |  0xa70 | Schema_Builtin | Size: 0x4
	m_start: 2676n, // GlobalTypes::QAngle  | Schema_Atomic | Size: 0xc
	m_end: 2688n, // GlobalTypes::QAngle  | Schema_Atomic | Size: 0xc
	m_IdealYaw: 2700n, // float32 m_IdealYaw; |  0xa8c | Schema_Builtin | Size: 0x4
	m_sNoise: 2704n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_bUpdateTarget: 2712n, // bool m_bUpdateTarget; |  0xa98 | Schema_Builtin | Size: 0x1
	m_direction: 2716n, // int32_t m_direction; |  0xa9c | Schema_Builtin | Size: 0x4
	m_returnSpeed: 2720n, // float32 m_returnSpeed; |  0xaa0 | Schema_Builtin | Size: 0x4
	m_flStartPosition: 2724n, // float32 m_flStartPosition; |  0xaa4 | Schema_Builtin | Size: 0x4
}
