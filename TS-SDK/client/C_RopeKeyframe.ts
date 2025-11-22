// generated - do not edit!

import {client_C_BaseModelEntity} from './C_BaseModelEntity';
// Class size: 0x1220
// BaseClass: : public CS2::client::C_BaseModelEntity
export const client_C_RopeKeyframe  = {
	...client_C_BaseModelEntity,
	m_LinksTouchingSomething: 3768n, // GlobalTypes::CBitVec  | Schema_Atomic | Size: 0x4
	m_nLinksTouchingSomething: 3772n, // int32_t m_nLinksTouchingSomething; |  0xebc | Schema_Builtin | Size: 0x4
	m_bApplyWind: 3776n, // bool m_bApplyWind; |  0xec0 | Schema_Builtin | Size: 0x1
	m_fPrevLockedPoints: 3780n, // int32_t m_fPrevLockedPoints; |  0xec4 | Schema_Builtin | Size: 0x4
	m_iForcePointMoveCounter: 3784n, // int32_t m_iForcePointMoveCounter; |  0xec8 | Schema_Builtin | Size: 0x4
	m_bPrevEndPointPos: 3788n, // bool m_bPrevEndPointPos[2]; |  0xecc | Schema_FixedArray | Size: 0x2
	m_vPrevEndPointPos: 3792n, // GlobalTypes::Vector[2]  | Schema_FixedArray | Size: 0x18
	m_flCurScroll: 3816n, // float32 m_flCurScroll; |  0xee8 | Schema_Builtin | Size: 0x4
	m_flScrollSpeed: 3820n, // float32 m_flScrollSpeed; |  0xeec | Schema_Builtin | Size: 0x4
	m_RopeFlags: 3824n, // uint16_t m_RopeFlags; |  0xef0 | Schema_Builtin | Size: 0x2
	m_iRopeMaterialModelIndex: 3832n, // GlobalTypes::CStrongHandle<resourcesystem::InfoForResourceTypeIMaterial2>  | Schema_Atomic | Size: 0x8
	m_nSegments: 4464n, // uint8_t m_nSegments; |  0x1170 | Schema_Builtin | Size: 0x1
	m_hStartPoint: 4468n, // GlobalTypes::CHandle<client::C_BaseEntity>  | Schema_Atomic | Size: 0x4
	m_hEndPoint: 4472n, // GlobalTypes::CHandle<client::C_BaseEntity>  | Schema_Atomic | Size: 0x4
	m_iStartAttachment: 4476n, // modellib::AttachmentHandle_t  | Schema_DeclaredClass | Size: 0x1
	m_iEndAttachment: 4477n, // modellib::AttachmentHandle_t  | Schema_DeclaredClass | Size: 0x1
	m_Subdiv: 4478n, // uint8_t m_Subdiv; |  0x117e | Schema_Builtin | Size: 0x1
	m_RopeLength: 4480n, // int16_t m_RopeLength; |  0x1180 | Schema_Builtin | Size: 0x2
	m_Slack: 4482n, // int16_t m_Slack; |  0x1182 | Schema_Builtin | Size: 0x2
	m_TextureScale: 4484n, // float32 m_TextureScale; |  0x1184 | Schema_Builtin | Size: 0x4
	m_fLockedPoints: 4488n, // uint8_t m_fLockedPoints; |  0x1188 | Schema_Builtin | Size: 0x1
	m_nChangeCount: 4489n, // uint8_t m_nChangeCount; |  0x1189 | Schema_Builtin | Size: 0x1
	m_Width: 4492n, // float32 m_Width; |  0x118c | Schema_Builtin | Size: 0x4
	m_PhysicsDelegate: 4496n, // client::C_RopeKeyframe::CPhysicsDelegate  | Schema_DeclaredClass | Size: 0x10
	m_hMaterial: 4512n, // GlobalTypes::CStrongHandle<resourcesystem::InfoForResourceTypeIMaterial2>  | Schema_Atomic | Size: 0x8
	m_TextureHeight: 4520n, // int32_t m_TextureHeight; |  0x11a8 | Schema_Builtin | Size: 0x4
	m_vecImpulse: 4524n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_vecPreviousImpulse: 4536n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_flCurrentGustTimer: 4548n, // float32 m_flCurrentGustTimer; |  0x11c4 | Schema_Builtin | Size: 0x4
	m_flCurrentGustLifetime: 4552n, // float32 m_flCurrentGustLifetime; |  0x11c8 | Schema_Builtin | Size: 0x4
	m_flTimeToNextGust: 4556n, // float32 m_flTimeToNextGust; |  0x11cc | Schema_Builtin | Size: 0x4
	m_vWindDir: 4560n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_vColorMod: 4572n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_vCachedEndPointAttachmentPos: 4584n, // GlobalTypes::Vector[2]  | Schema_FixedArray | Size: 0x18
	m_vCachedEndPointAttachmentAngle: 4608n, // GlobalTypes::QAngle[2]  | Schema_FixedArray | Size: 0x18
	m_bConstrainBetweenEndpoints: 4632n, // bool m_bConstrainBetweenEndpoints; |  0x1218 | Schema_Builtin | Size: 0x1
}
