// generated - do not edit!

import {client_C_BaseEntity} from './C_BaseEntity';
// Class size: 0x840
// BaseClass: : public CS2::client::C_BaseEntity
export const client_C_ColorCorrection  = {
	...client_C_BaseEntity,
	m_vecOrigin: 1528n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_MinFalloff: 1540n, // float32 m_MinFalloff; |  0x604 | Schema_Builtin | Size: 0x4
	m_MaxFalloff: 1544n, // float32 m_MaxFalloff; |  0x608 | Schema_Builtin | Size: 0x4
	m_flFadeInDuration: 1548n, // float32 m_flFadeInDuration; |  0x60c | Schema_Builtin | Size: 0x4
	m_flFadeOutDuration: 1552n, // float32 m_flFadeOutDuration; |  0x610 | Schema_Builtin | Size: 0x4
	m_flMaxWeight: 1556n, // float32 m_flMaxWeight; |  0x614 | Schema_Builtin | Size: 0x4
	m_flCurWeight: 1560n, // float32 m_flCurWeight; |  0x618 | Schema_Builtin | Size: 0x4
	m_netlookupFilename: 1564n, // char m_netlookupFilename[512]; |  0x61c | Schema_FixedArray | Size: 0x200
	m_bEnabled: 2076n, // bool m_bEnabled; |  0x81c | Schema_Builtin | Size: 0x1
	m_bMaster: 2077n, // bool m_bMaster; |  0x81d | Schema_Builtin | Size: 0x1
	m_bClientSide: 2078n, // bool m_bClientSide; |  0x81e | Schema_Builtin | Size: 0x1
	m_bExclusive: 2079n, // bool m_bExclusive; |  0x81f | Schema_Builtin | Size: 0x1
	m_bEnabledOnClient: 2080n, // bool m_bEnabledOnClient[1]; |  0x820 | Schema_FixedArray | Size: 0x1
	m_flCurWeightOnClient: 2084n, // float32 m_flCurWeightOnClient[1]; |  0x824 | Schema_FixedArray | Size: 0x4
	m_bFadingIn: 2088n, // bool m_bFadingIn[1]; |  0x828 | Schema_FixedArray | Size: 0x1
	m_flFadeStartWeight: 2092n, // float32 m_flFadeStartWeight[1]; |  0x82c | Schema_FixedArray | Size: 0x4
	m_flFadeStartTime: 2096n, // float32 m_flFadeStartTime[1]; |  0x830 | Schema_FixedArray | Size: 0x4
	m_flFadeDuration: 2100n, // float32 m_flFadeDuration[1]; |  0x834 | Schema_FixedArray | Size: 0x4
}
