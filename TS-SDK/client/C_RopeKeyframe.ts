// generated - do not edit!

import {client_C_BaseModelEntity} from './C_BaseModelEntity';
// Class size: 0x11F8
// BaseClass: : public CS2::client::C_BaseModelEntity
export const client_C_RopeKeyframe  = {
	...client_C_BaseModelEntity,
	m_LinksTouchingSomething: 3728n, // GlobalTypes::CBitVec  | Schema_Atomic | Size: 0x4
	m_nLinksTouchingSomething: 3732n, // int32_t m_nLinksTouchingSomething; |  0xe94 | Schema_Builtin | Size: 0x4
	m_bApplyWind: 3736n, // bool m_bApplyWind; |  0xe98 | Schema_Builtin | Size: 0x1
	m_fPrevLockedPoints: 3740n, // int32_t m_fPrevLockedPoints; |  0xe9c | Schema_Builtin | Size: 0x4
	m_iForcePointMoveCounter: 3744n, // int32_t m_iForcePointMoveCounter; |  0xea0 | Schema_Builtin | Size: 0x4
	m_bPrevEndPointPos: 3748n, // bool m_bPrevEndPointPos[2]; |  0xea4 | Schema_FixedArray | Size: 0x2
	m_vPrevEndPointPos: 3752n, // GlobalTypes::Vector[2]  | Schema_FixedArray | Size: 0x18
	m_flCurScroll: 3776n, // float32 m_flCurScroll; |  0xec0 | Schema_Builtin | Size: 0x4
	m_flScrollSpeed: 3780n, // float32 m_flScrollSpeed; |  0xec4 | Schema_Builtin | Size: 0x4
	m_RopeFlags: 3784n, // uint16_t m_RopeFlags; |  0xec8 | Schema_Builtin | Size: 0x2
	m_iRopeMaterialModelIndex: 3792n, // GlobalTypes::CStrongHandle<resourcesystem::InfoForResourceTypeIMaterial2>  | Schema_Atomic | Size: 0x8
	m_nSegments: 4424n, // uint8_t m_nSegments; |  0x1148 | Schema_Builtin | Size: 0x1
	m_hStartPoint: 4428n, // GlobalTypes::CHandle<client::C_BaseEntity>  | Schema_Atomic | Size: 0x4
	m_hEndPoint: 4432n, // GlobalTypes::CHandle<client::C_BaseEntity>  | Schema_Atomic | Size: 0x4
	m_iStartAttachment: 4436n, // modellib::AttachmentHandle_t  | Schema_DeclaredClass | Size: 0x1
	m_iEndAttachment: 4437n, // modellib::AttachmentHandle_t  | Schema_DeclaredClass | Size: 0x1
	m_Subdiv: 4438n, // uint8_t m_Subdiv; |  0x1156 | Schema_Builtin | Size: 0x1
	m_RopeLength: 4440n, // int16_t m_RopeLength; |  0x1158 | Schema_Builtin | Size: 0x2
	m_Slack: 4442n, // int16_t m_Slack; |  0x115a | Schema_Builtin | Size: 0x2
	m_TextureScale: 4444n, // float32 m_TextureScale; |  0x115c | Schema_Builtin | Size: 0x4
	m_fLockedPoints: 4448n, // uint8_t m_fLockedPoints; |  0x1160 | Schema_Builtin | Size: 0x1
	m_nChangeCount: 4449n, // uint8_t m_nChangeCount; |  0x1161 | Schema_Builtin | Size: 0x1
	m_Width: 4452n, // float32 m_Width; |  0x1164 | Schema_Builtin | Size: 0x4
	m_PhysicsDelegate: 4456n, // client::C_RopeKeyframe::CPhysicsDelegate  | Schema_DeclaredClass | Size: 0x10
	m_hMaterial: 4472n, // GlobalTypes::CStrongHandle<resourcesystem::InfoForResourceTypeIMaterial2>  | Schema_Atomic | Size: 0x8
	m_TextureHeight: 4480n, // int32_t m_TextureHeight; |  0x1180 | Schema_Builtin | Size: 0x4
	m_vecImpulse: 4484n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_vecPreviousImpulse: 4496n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_flCurrentGustTimer: 4508n, // float32 m_flCurrentGustTimer; |  0x119c | Schema_Builtin | Size: 0x4
	m_flCurrentGustLifetime: 4512n, // float32 m_flCurrentGustLifetime; |  0x11a0 | Schema_Builtin | Size: 0x4
	m_flTimeToNextGust: 4516n, // float32 m_flTimeToNextGust; |  0x11a4 | Schema_Builtin | Size: 0x4
	m_vWindDir: 4520n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_vColorMod: 4532n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_vCachedEndPointAttachmentPos: 4544n, // GlobalTypes::Vector[2]  | Schema_FixedArray | Size: 0x18
	m_vCachedEndPointAttachmentAngle: 4568n, // GlobalTypes::QAngle[2]  | Schema_FixedArray | Size: 0x18
	m_bConstrainBetweenEndpoints: 4592n, // bool m_bConstrainBetweenEndpoints; |  0x11f0 | Schema_Builtin | Size: 0x1
}
