// generated - do not edit!

// Class size: 0xE0
// BaseClass: NONE
export const physicslib_RnBodyDesc_t  = {
	m_sDebugName: 0n, // GlobalTypes::CUtlString  | Schema_Atomic | Size: 0x8
	m_vPosition: 8n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_qOrientation: 20n, // GlobalTypes::QuaternionStorage  | Schema_Atomic | Size: 0x10
	m_vLinearVelocity: 36n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_vAngularVelocity: 48n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_vLocalMassCenter: 60n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_LocalInertiaInv: 72n, // GlobalTypes::Vector[3]  | Schema_FixedArray | Size: 0x24
	m_flMassInv: 108n, // float32 m_flMassInv; |  0x6c | Schema_Builtin | Size: 0x4
	m_flGameMass: 112n, // float32 m_flGameMass; |  0x70 | Schema_Builtin | Size: 0x4
	m_flMassScaleInv: 116n, // float32 m_flMassScaleInv; |  0x74 | Schema_Builtin | Size: 0x4
	m_flInertiaScaleInv: 120n, // float32 m_flInertiaScaleInv; |  0x78 | Schema_Builtin | Size: 0x4
	m_flLinearDamping: 124n, // float32 m_flLinearDamping; |  0x7c | Schema_Builtin | Size: 0x4
	m_flAngularDamping: 128n, // float32 m_flAngularDamping; |  0x80 | Schema_Builtin | Size: 0x4
	m_flLinearDrag: 132n, // float32 m_flLinearDrag; |  0x84 | Schema_Builtin | Size: 0x4
	m_flAngularDrag: 136n, // float32 m_flAngularDrag; |  0x88 | Schema_Builtin | Size: 0x4
	m_flLinearBuoyancyDrag: 140n, // float32 m_flLinearBuoyancyDrag; |  0x8c | Schema_Builtin | Size: 0x4
	m_flAngularBuoyancyDrag: 144n, // float32 m_flAngularBuoyancyDrag; |  0x90 | Schema_Builtin | Size: 0x4
	m_vLastAwakeForceAccum: 148n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_vLastAwakeTorqueAccum: 160n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_flBuoyancyFactor: 172n, // float32 m_flBuoyancyFactor; |  0xac | Schema_Builtin | Size: 0x4
	m_flGravityScale: 176n, // float32 m_flGravityScale; |  0xb0 | Schema_Builtin | Size: 0x4
	m_flTimeScale: 180n, // float32 m_flTimeScale; |  0xb4 | Schema_Builtin | Size: 0x4
	m_nBodyType: 184n, // int32_t m_nBodyType; |  0xb8 | Schema_Builtin | Size: 0x4
	m_nGameIndex: 188n, // uint32_t m_nGameIndex; |  0xbc | Schema_Builtin | Size: 0x4
	m_nGameFlags: 192n, // uint32_t m_nGameFlags; |  0xc0 | Schema_Builtin | Size: 0x4
	m_nMinVelocityIterations: 196n, // int8_t m_nMinVelocityIterations; |  0xc4 | Schema_Builtin | Size: 0x1
	m_nMinPositionIterations: 197n, // int8_t m_nMinPositionIterations; |  0xc5 | Schema_Builtin | Size: 0x1
	m_nMassPriority: 198n, // int8_t m_nMassPriority; |  0xc6 | Schema_Builtin | Size: 0x1
	m_bEnabled: 199n, // bool m_bEnabled; |  0xc7 | Schema_Builtin | Size: 0x1
	m_bSleeping: 200n, // bool m_bSleeping; |  0xc8 | Schema_Builtin | Size: 0x1
	m_bIsContinuousEnabled: 201n, // bool m_bIsContinuousEnabled; |  0xc9 | Schema_Builtin | Size: 0x1
	m_bDragEnabled: 202n, // bool m_bDragEnabled; |  0xca | Schema_Builtin | Size: 0x1
	m_bBuoyancyDragEnabled: 203n, // bool m_bBuoyancyDragEnabled; |  0xcb | Schema_Builtin | Size: 0x1
	m_vGravity: 204n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_bSpeculativeEnabled: 216n, // bool m_bSpeculativeEnabled; |  0xd8 | Schema_Builtin | Size: 0x1
	m_bHasShadowController: 217n, // bool m_bHasShadowController; |  0xd9 | Schema_Builtin | Size: 0x1
	m_nDynamicContinuousContactBehavior: 218n, // physicslib::DynamicContinuousContactBehavior_t  | Schema_DeclaredEnum | Size: 0x1
}
