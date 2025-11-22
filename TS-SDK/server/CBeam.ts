// generated - do not edit!

import {server_CBaseModelEntity} from './CBaseModelEntity';
// Class size: 0x878
// BaseClass: : public CS2::server::CBaseModelEntity
export const server_CBeam  = {
	...server_CBaseModelEntity,
	m_flFrameRate: 2008n, // float32 m_flFrameRate; |  0x7d8 | Schema_Builtin | Size: 0x4
	m_flHDRColorScale: 2012n, // float32 m_flHDRColorScale; |  0x7dc | Schema_Builtin | Size: 0x4
	m_flFireTime: 2016n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_flDamage: 2020n, // float32 m_flDamage; |  0x7e4 | Schema_Builtin | Size: 0x4
	m_nNumBeamEnts: 2024n, // uint8_t m_nNumBeamEnts; |  0x7e8 | Schema_Builtin | Size: 0x1
	m_hBaseMaterial: 2032n, // GlobalTypes::CStrongHandle<resourcesystem::InfoForResourceTypeIMaterial2>  | Schema_Atomic | Size: 0x8
	m_nHaloIndex: 2040n, // GlobalTypes::CStrongHandle<resourcesystem::InfoForResourceTypeIMaterial2>  | Schema_Atomic | Size: 0x8
	m_nBeamType: 2048n, // client::BeamType_t  | Schema_DeclaredEnum | Size: 0x4
	m_nBeamFlags: 2052n, // uint32_t m_nBeamFlags; |  0x804 | Schema_Builtin | Size: 0x4
	m_hAttachEntity: 2056n, // GlobalTypes::CHandle  | Schema_FixedArray | Size: 0x28
	m_nAttachIndex: 2096n, // GlobalTypes::AttachmentHandle_t[10]  | Schema_FixedArray | Size: 0x64
	m_fWidth: 2108n, // float32 m_fWidth; |  0x83c | Schema_Builtin | Size: 0x4
	m_fEndWidth: 2112n, // float32 m_fEndWidth; |  0x840 | Schema_Builtin | Size: 0x4
	m_fFadeLength: 2116n, // float32 m_fFadeLength; |  0x844 | Schema_Builtin | Size: 0x4
	m_fHaloScale: 2120n, // float32 m_fHaloScale; |  0x848 | Schema_Builtin | Size: 0x4
	m_fAmplitude: 2124n, // float32 m_fAmplitude; |  0x84c | Schema_Builtin | Size: 0x4
	m_fStartFrame: 2128n, // float32 m_fStartFrame; |  0x850 | Schema_Builtin | Size: 0x4
	m_fSpeed: 2132n, // float32 m_fSpeed; |  0x854 | Schema_Builtin | Size: 0x4
	m_flFrame: 2136n, // float32 m_flFrame; |  0x858 | Schema_Builtin | Size: 0x4
	m_nClipStyle: 2140n, // client::BeamClipStyle_t  | Schema_DeclaredEnum | Size: 0x4
	m_bTurnedOff: 2144n, // bool m_bTurnedOff; |  0x860 | Schema_Builtin | Size: 0x1
	m_vecEndPos: 2148n, // GlobalTypes::VectorWS  | Schema_Atomic | Size: 0xc
	m_hEndEntity: 2160n, // GlobalTypes::CHandle<server::CBaseEntity>  | Schema_Atomic | Size: 0x4
	m_nDissolveType: 2164n, // int32_t m_nDissolveType; |  0x874 | Schema_Builtin | Size: 0x4
}
