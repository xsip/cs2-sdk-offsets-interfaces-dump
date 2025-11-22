// generated - do not edit!

import {client_C_BaseModelEntity} from './C_BaseModelEntity';
// Class size: 0xF70
// BaseClass: : public CS2::client::C_BaseModelEntity
export const client_C_Beam  = {
	...client_C_BaseModelEntity,
	m_flFrameRate: 3760n, // float32 m_flFrameRate; |  0xeb0 | Schema_Builtin | Size: 0x4
	m_flHDRColorScale: 3764n, // float32 m_flHDRColorScale; |  0xeb4 | Schema_Builtin | Size: 0x4
	m_flFireTime: 3768n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_flDamage: 3772n, // float32 m_flDamage; |  0xebc | Schema_Builtin | Size: 0x4
	m_nNumBeamEnts: 3776n, // uint8_t m_nNumBeamEnts; |  0xec0 | Schema_Builtin | Size: 0x1
	m_queryHandleHalo: 3780n, // int32_t m_queryHandleHalo; |  0xec4 | Schema_Builtin | Size: 0x4
	m_hBaseMaterial: 3816n, // GlobalTypes::CStrongHandle<resourcesystem::InfoForResourceTypeIMaterial2>  | Schema_Atomic | Size: 0x8
	m_nHaloIndex: 3824n, // GlobalTypes::CStrongHandle<resourcesystem::InfoForResourceTypeIMaterial2>  | Schema_Atomic | Size: 0x8
	m_nBeamType: 3832n, // client::BeamType_t  | Schema_DeclaredEnum | Size: 0x4
	m_nBeamFlags: 3836n, // uint32_t m_nBeamFlags; |  0xefc | Schema_Builtin | Size: 0x4
	m_hAttachEntity: 3840n, // GlobalTypes::CHandle  | Schema_FixedArray | Size: 0x28
	m_nAttachIndex: 3880n, // GlobalTypes::AttachmentHandle_t[10]  | Schema_FixedArray | Size: 0x64
	m_fWidth: 3892n, // float32 m_fWidth; |  0xf34 | Schema_Builtin | Size: 0x4
	m_fEndWidth: 3896n, // float32 m_fEndWidth; |  0xf38 | Schema_Builtin | Size: 0x4
	m_fFadeLength: 3900n, // float32 m_fFadeLength; |  0xf3c | Schema_Builtin | Size: 0x4
	m_fHaloScale: 3904n, // float32 m_fHaloScale; |  0xf40 | Schema_Builtin | Size: 0x4
	m_fAmplitude: 3908n, // float32 m_fAmplitude; |  0xf44 | Schema_Builtin | Size: 0x4
	m_fStartFrame: 3912n, // float32 m_fStartFrame; |  0xf48 | Schema_Builtin | Size: 0x4
	m_fSpeed: 3916n, // float32 m_fSpeed; |  0xf4c | Schema_Builtin | Size: 0x4
	m_flFrame: 3920n, // float32 m_flFrame; |  0xf50 | Schema_Builtin | Size: 0x4
	m_nClipStyle: 3924n, // client::BeamClipStyle_t  | Schema_DeclaredEnum | Size: 0x4
	m_bTurnedOff: 3928n, // bool m_bTurnedOff; |  0xf58 | Schema_Builtin | Size: 0x1
	m_vecEndPos: 3932n, // GlobalTypes::VectorWS  | Schema_Atomic | Size: 0xc
	m_hEndEntity: 3944n, // GlobalTypes::CHandle<client::C_BaseEntity>  | Schema_Atomic | Size: 0x4
}
