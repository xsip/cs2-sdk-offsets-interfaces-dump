// generated - do not edit!

import {client_C_BaseModelEntity} from './C_BaseModelEntity';
// Class size: 0xF48
// BaseClass: : public CS2::client::C_BaseModelEntity
export const client_C_Beam  = {
	...client_C_BaseModelEntity,
	m_flFrameRate: 3720n, // float32 m_flFrameRate; |  0xe88 | Schema_Builtin | Size: 0x4
	m_flHDRColorScale: 3724n, // float32 m_flHDRColorScale; |  0xe8c | Schema_Builtin | Size: 0x4
	m_flFireTime: 3728n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_flDamage: 3732n, // float32 m_flDamage; |  0xe94 | Schema_Builtin | Size: 0x4
	m_nNumBeamEnts: 3736n, // uint8_t m_nNumBeamEnts; |  0xe98 | Schema_Builtin | Size: 0x1
	m_queryHandleHalo: 3740n, // int32_t m_queryHandleHalo; |  0xe9c | Schema_Builtin | Size: 0x4
	m_hBaseMaterial: 3776n, // GlobalTypes::CStrongHandle<resourcesystem::InfoForResourceTypeIMaterial2>  | Schema_Atomic | Size: 0x8
	m_nHaloIndex: 3784n, // GlobalTypes::CStrongHandle<resourcesystem::InfoForResourceTypeIMaterial2>  | Schema_Atomic | Size: 0x8
	m_nBeamType: 3792n, // client::BeamType_t  | Schema_DeclaredEnum | Size: 0x4
	m_nBeamFlags: 3796n, // uint32_t m_nBeamFlags; |  0xed4 | Schema_Builtin | Size: 0x4
	m_hAttachEntity: 3800n, // GlobalTypes::CHandle  | Schema_FixedArray | Size: 0x28
	m_nAttachIndex: 3840n, // GlobalTypes::AttachmentHandle_t[10]  | Schema_FixedArray | Size: 0xa
	m_fWidth: 3852n, // float32 m_fWidth; |  0xf0c | Schema_Builtin | Size: 0x4
	m_fEndWidth: 3856n, // float32 m_fEndWidth; |  0xf10 | Schema_Builtin | Size: 0x4
	m_fFadeLength: 3860n, // float32 m_fFadeLength; |  0xf14 | Schema_Builtin | Size: 0x4
	m_fHaloScale: 3864n, // float32 m_fHaloScale; |  0xf18 | Schema_Builtin | Size: 0x4
	m_fAmplitude: 3868n, // float32 m_fAmplitude; |  0xf1c | Schema_Builtin | Size: 0x4
	m_fStartFrame: 3872n, // float32 m_fStartFrame; |  0xf20 | Schema_Builtin | Size: 0x4
	m_fSpeed: 3876n, // float32 m_fSpeed; |  0xf24 | Schema_Builtin | Size: 0x4
	m_flFrame: 3880n, // float32 m_flFrame; |  0xf28 | Schema_Builtin | Size: 0x4
	m_nClipStyle: 3884n, // client::BeamClipStyle_t  | Schema_DeclaredEnum | Size: 0x4
	m_bTurnedOff: 3888n, // bool m_bTurnedOff; |  0xf30 | Schema_Builtin | Size: 0x1
	m_vecEndPos: 3892n, // GlobalTypes::VectorWS  | Schema_Atomic | Size: 0xc
	m_hEndEntity: 3904n, // GlobalTypes::CHandle<client::C_BaseEntity>  | Schema_Atomic | Size: 0x4
}
