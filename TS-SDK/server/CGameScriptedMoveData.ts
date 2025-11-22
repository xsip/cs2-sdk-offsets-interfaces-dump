// generated - do not edit!

// Class size: 0x74
// BaseClass: NONE
export const server_CGameScriptedMoveData  = {
	m_vAccumulatedRootMotion: 0n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_angAccumulatedRootMotionRotation: 12n, // GlobalTypes::QAngle  | Schema_Atomic | Size: 0xc
	m_vSrc: 24n, // GlobalTypes::VectorWS  | Schema_Atomic | Size: 0xc
	m_angSrc: 36n, // GlobalTypes::QAngle  | Schema_Atomic | Size: 0xc
	m_angCurrent: 48n, // GlobalTypes::QAngle  | Schema_Atomic | Size: 0xc
	m_flLockedSpeed: 60n, // float32 m_flLockedSpeed; |  0x3c | Schema_Builtin | Size: 0x4
	m_flAngRate: 64n, // float32 m_flAngRate; |  0x40 | Schema_Builtin | Size: 0x4
	m_flDuration: 68n, // float32 m_flDuration; |  0x44 | Schema_Builtin | Size: 0x4
	m_flStartTime: 72n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_bActive: 76n, // bool m_bActive; |  0x4c | Schema_Builtin | Size: 0x1
	m_bTeleportOnEnd: 77n, // bool m_bTeleportOnEnd; |  0x4d | Schema_Builtin | Size: 0x1
	m_bIgnoreRotation: 78n, // bool m_bIgnoreRotation; |  0x4e | Schema_Builtin | Size: 0x1
	m_bSuccess: 79n, // bool m_bSuccess; |  0x4f | Schema_Builtin | Size: 0x1
	m_nForcedCrouchState: 80n, // client::ForcedCrouchState_t  | Schema_DeclaredEnum | Size: 0x4
	m_bIgnoreCollisions: 84n, // bool m_bIgnoreCollisions; |  0x54 | Schema_Builtin | Size: 0x1
	m_vDest: 88n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_angDst: 100n, // GlobalTypes::QAngle  | Schema_Atomic | Size: 0xc
	m_hDestEntity: 112n, // GlobalTypes::CHandle<server::CBaseEntity>  | Schema_Atomic | Size: 0x4
}
