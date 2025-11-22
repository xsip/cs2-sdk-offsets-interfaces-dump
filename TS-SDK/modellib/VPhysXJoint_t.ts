// generated - do not edit!

// Class size: 0xD0
// BaseClass: NONE
export const modellib_VPhysXJoint_t  = {
	m_nType: 0n, // uint16_t m_nType; |  0x0 | Schema_Builtin | Size: 0x2
	m_nBody1: 2n, // uint16_t m_nBody1; |  0x2 | Schema_Builtin | Size: 0x2
	m_nBody2: 4n, // uint16_t m_nBody2; |  0x4 | Schema_Builtin | Size: 0x2
	m_nFlags: 6n, // uint16_t m_nFlags; |  0x6 | Schema_Builtin | Size: 0x2
	m_Frame1: 16n, // GlobalTypes::CTransform  | Schema_Atomic | Size: 0x20
	m_Frame2: 48n, // GlobalTypes::CTransform  | Schema_Atomic | Size: 0x20
	m_bEnableCollision: 80n, // bool m_bEnableCollision; |  0x50 | Schema_Builtin | Size: 0x1
	m_bIsLinearConstraintDisabled: 81n, // bool m_bIsLinearConstraintDisabled; |  0x51 | Schema_Builtin | Size: 0x1
	m_bIsAngularConstraintDisabled: 82n, // bool m_bIsAngularConstraintDisabled; |  0x52 | Schema_Builtin | Size: 0x1
	m_bEnableLinearLimit: 83n, // bool m_bEnableLinearLimit; |  0x53 | Schema_Builtin | Size: 0x1
	m_LinearLimit: 84n, // modellib::VPhysXRange_t  | Schema_DeclaredClass | Size: 0x8
	m_bEnableLinearMotor: 92n, // bool m_bEnableLinearMotor; |  0x5c | Schema_Builtin | Size: 0x1
	m_vLinearTargetVelocity: 96n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_flMaxForce: 108n, // float32 m_flMaxForce; |  0x6c | Schema_Builtin | Size: 0x4
	m_bEnableSwingLimit: 112n, // bool m_bEnableSwingLimit; |  0x70 | Schema_Builtin | Size: 0x1
	m_SwingLimit: 116n, // modellib::VPhysXRange_t  | Schema_DeclaredClass | Size: 0x8
	m_bEnableTwistLimit: 124n, // bool m_bEnableTwistLimit; |  0x7c | Schema_Builtin | Size: 0x1
	m_TwistLimit: 128n, // modellib::VPhysXRange_t  | Schema_DeclaredClass | Size: 0x8
	m_bEnableAngularMotor: 136n, // bool m_bEnableAngularMotor; |  0x88 | Schema_Builtin | Size: 0x1
	m_vAngularTargetVelocity: 140n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_flMaxTorque: 152n, // float32 m_flMaxTorque; |  0x98 | Schema_Builtin | Size: 0x4
	m_flLinearFrequency: 156n, // float32 m_flLinearFrequency; |  0x9c | Schema_Builtin | Size: 0x4
	m_flLinearDampingRatio: 160n, // float32 m_flLinearDampingRatio; |  0xa0 | Schema_Builtin | Size: 0x4
	m_flAngularFrequency: 164n, // float32 m_flAngularFrequency; |  0xa4 | Schema_Builtin | Size: 0x4
	m_flAngularDampingRatio: 168n, // float32 m_flAngularDampingRatio; |  0xa8 | Schema_Builtin | Size: 0x4
	m_flFriction: 172n, // float32 m_flFriction; |  0xac | Schema_Builtin | Size: 0x4
	m_flElasticity: 176n, // float32 m_flElasticity; |  0xb0 | Schema_Builtin | Size: 0x4
	m_flElasticDamping: 180n, // float32 m_flElasticDamping; |  0xb4 | Schema_Builtin | Size: 0x4
	m_flPlasticity: 184n, // float32 m_flPlasticity; |  0xb8 | Schema_Builtin | Size: 0x4
	m_Tag: 192n, // GlobalTypes::CUtlString  | Schema_Atomic | Size: 0x8
}
