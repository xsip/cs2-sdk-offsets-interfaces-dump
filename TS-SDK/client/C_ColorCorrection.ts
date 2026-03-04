// generated - do not edit!

import {client_C_BaseEntity} from './C_BaseEntity';
// Class size: 0x850
// BaseClass: : public CS2::client::C_BaseEntity
export const client_C_ColorCorrection  = {
	...client_C_BaseEntity,
	m_vecOrigin: 1544n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_MinFalloff: 1556n, // float32 m_MinFalloff; |  0x614 | Schema_Builtin | Size: 0x4
	m_MaxFalloff: 1560n, // float32 m_MaxFalloff; |  0x618 | Schema_Builtin | Size: 0x4
	m_flFadeInDuration: 1564n, // float32 m_flFadeInDuration; |  0x61c | Schema_Builtin | Size: 0x4
	m_flFadeOutDuration: 1568n, // float32 m_flFadeOutDuration; |  0x620 | Schema_Builtin | Size: 0x4
	m_flMaxWeight: 1572n, // float32 m_flMaxWeight; |  0x624 | Schema_Builtin | Size: 0x4
	m_flCurWeight: 1576n, // float32 m_flCurWeight; |  0x628 | Schema_Builtin | Size: 0x4
	m_netlookupFilename: 1580n, // char m_netlookupFilename[512]; |  0x62c | Schema_FixedArray | Size: 0x200
	m_bEnabled: 2092n, // bool m_bEnabled; |  0x82c | Schema_Builtin | Size: 0x1
	m_bMaster: 2093n, // bool m_bMaster; |  0x82d | Schema_Builtin | Size: 0x1
	m_bClientSide: 2094n, // bool m_bClientSide; |  0x82e | Schema_Builtin | Size: 0x1
	m_bExclusive: 2095n, // bool m_bExclusive; |  0x82f | Schema_Builtin | Size: 0x1
	m_bEnabledOnClient: 2096n, // bool m_bEnabledOnClient[1]; |  0x830 | Schema_FixedArray | Size: 0x1
	m_flCurWeightOnClient: 2100n, // float32 m_flCurWeightOnClient[1]; |  0x834 | Schema_FixedArray | Size: 0x4
	m_bFadingIn: 2104n, // bool m_bFadingIn[1]; |  0x838 | Schema_FixedArray | Size: 0x1
	m_flFadeStartWeight: 2108n, // float32 m_flFadeStartWeight[1]; |  0x83c | Schema_FixedArray | Size: 0x4
	m_flFadeStartTime: 2112n, // float32 m_flFadeStartTime[1]; |  0x840 | Schema_FixedArray | Size: 0x4
	m_flFadeDuration: 2116n, // float32 m_flFadeDuration[1]; |  0x844 | Schema_FixedArray | Size: 0x4
}
