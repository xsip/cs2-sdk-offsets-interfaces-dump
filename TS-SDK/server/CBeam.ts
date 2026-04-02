// generated - do not edit!

import {server_CBaseModelEntity} from './CBaseModelEntity';
// Class size: 0x7D0
// BaseClass: : public CS2::server::CBaseModelEntity
export const server_CBeam  = {
	...server_CBaseModelEntity,
	m_flFrameRate: 1840n, // float32 m_flFrameRate; |  0x730 | Schema_Builtin | Size: 0x4
	m_flHDRColorScale: 1844n, // float32 m_flHDRColorScale; |  0x734 | Schema_Builtin | Size: 0x4
	m_flFireTime: 1848n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_flDamage: 1852n, // float32 m_flDamage; |  0x73c | Schema_Builtin | Size: 0x4
	m_nNumBeamEnts: 1856n, // uint8_t m_nNumBeamEnts; |  0x740 | Schema_Builtin | Size: 0x1
	m_hBaseMaterial: 1864n, // GlobalTypes::CStrongHandle<resourcesystem::InfoForResourceTypeIMaterial2>  | Schema_Atomic | Size: 0x8
	m_nHaloIndex: 1872n, // GlobalTypes::CStrongHandle<resourcesystem::InfoForResourceTypeIMaterial2>  | Schema_Atomic | Size: 0x8
	m_nBeamType: 1880n, // client::BeamType_t  | Schema_DeclaredEnum | Size: 0x4
	m_nBeamFlags: 1884n, // uint32_t m_nBeamFlags; |  0x75c | Schema_Builtin | Size: 0x4
	m_hAttachEntity: 1888n, // GlobalTypes::CHandle  | Schema_FixedArray | Size: 0x28
	m_nAttachIndex: 1928n, // GlobalTypes::AttachmentHandle_t[10]  | Schema_FixedArray | Size: 0xa
	m_fWidth: 1940n, // float32 m_fWidth; |  0x794 | Schema_Builtin | Size: 0x4
	m_fEndWidth: 1944n, // float32 m_fEndWidth; |  0x798 | Schema_Builtin | Size: 0x4
	m_fFadeLength: 1948n, // float32 m_fFadeLength; |  0x79c | Schema_Builtin | Size: 0x4
	m_fHaloScale: 1952n, // float32 m_fHaloScale; |  0x7a0 | Schema_Builtin | Size: 0x4
	m_fAmplitude: 1956n, // float32 m_fAmplitude; |  0x7a4 | Schema_Builtin | Size: 0x4
	m_fStartFrame: 1960n, // float32 m_fStartFrame; |  0x7a8 | Schema_Builtin | Size: 0x4
	m_fSpeed: 1964n, // float32 m_fSpeed; |  0x7ac | Schema_Builtin | Size: 0x4
	m_flFrame: 1968n, // float32 m_flFrame; |  0x7b0 | Schema_Builtin | Size: 0x4
	m_nClipStyle: 1972n, // client::BeamClipStyle_t  | Schema_DeclaredEnum | Size: 0x4
	m_bTurnedOff: 1976n, // bool m_bTurnedOff; |  0x7b8 | Schema_Builtin | Size: 0x1
	m_vecEndPos: 1980n, // GlobalTypes::VectorWS  | Schema_Atomic | Size: 0xc
	m_hEndEntity: 1992n, // GlobalTypes::CHandle<server::CBaseEntity>  | Schema_Atomic | Size: 0x4
	m_nDissolveType: 1996n, // int32_t m_nDissolveType; |  0x7cc | Schema_Builtin | Size: 0x4
}
