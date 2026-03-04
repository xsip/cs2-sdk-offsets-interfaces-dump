// generated - do not edit!

import {server_CBaseTrigger} from './CBaseTrigger';
// Class size: 0x8C8
// BaseClass: : public CS2::server::CBaseTrigger
export const server_CTriggerPush  = {
	...server_CBaseTrigger,
	m_angPushEntitySpace: 2192n, // GlobalTypes::QAngle  | Schema_Atomic | Size: 0xc
	m_vecPushDirEntitySpace: 2204n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_bTriggerOnStartTouch: 2216n, // bool m_bTriggerOnStartTouch; |  0x8a8 | Schema_Builtin | Size: 0x1
	m_bUsePathSimple: 2217n, // bool m_bUsePathSimple; |  0x8a9 | Schema_Builtin | Size: 0x1
	m_iszPathSimpleName: 2224n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_PathSimple: 2232n, // server::CPathSimple**  | Schema_Ptr | Size: 0x8
	m_splinePushType: 2240n, // uint32_t m_splinePushType; |  0x8c0 | Schema_Builtin | Size: 0x4
}
