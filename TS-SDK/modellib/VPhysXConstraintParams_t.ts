// generated - do not edit!

// Class size: 0xF8
// BaseClass: NONE
export const modellib_VPhysXConstraintParams_t  = {
	m_nType: 0n, // int8_t m_nType; |  0x0 | Schema_Builtin | Size: 0x1
	m_nTranslateMotion: 1n, // int8_t m_nTranslateMotion; |  0x1 | Schema_Builtin | Size: 0x1
	m_nRotateMotion: 2n, // int8_t m_nRotateMotion; |  0x2 | Schema_Builtin | Size: 0x1
	m_nFlags: 3n, // int8_t m_nFlags; |  0x3 | Schema_Builtin | Size: 0x1
	m_anchor: 4n, // GlobalTypes::Vector[2]  | Schema_FixedArray | Size: 0x18
	m_axes: 28n, // GlobalTypes::QuaternionStorage[2]  | Schema_FixedArray | Size: 0x20
	m_maxForce: 60n, // float32 m_maxForce; |  0x3c | Schema_Builtin | Size: 0x4
	m_maxTorque: 64n, // float32 m_maxTorque; |  0x40 | Schema_Builtin | Size: 0x4
	m_linearLimitValue: 68n, // float32 m_linearLimitValue; |  0x44 | Schema_Builtin | Size: 0x4
	m_linearLimitRestitution: 72n, // float32 m_linearLimitRestitution; |  0x48 | Schema_Builtin | Size: 0x4
	m_linearLimitSpring: 76n, // float32 m_linearLimitSpring; |  0x4c | Schema_Builtin | Size: 0x4
	m_linearLimitDamping: 80n, // float32 m_linearLimitDamping; |  0x50 | Schema_Builtin | Size: 0x4
	m_twistLowLimitValue: 84n, // float32 m_twistLowLimitValue; |  0x54 | Schema_Builtin | Size: 0x4
	m_twistLowLimitRestitution: 88n, // float32 m_twistLowLimitRestitution; |  0x58 | Schema_Builtin | Size: 0x4
	m_twistLowLimitSpring: 92n, // float32 m_twistLowLimitSpring; |  0x5c | Schema_Builtin | Size: 0x4
	m_twistLowLimitDamping: 96n, // float32 m_twistLowLimitDamping; |  0x60 | Schema_Builtin | Size: 0x4
	m_twistHighLimitValue: 100n, // float32 m_twistHighLimitValue; |  0x64 | Schema_Builtin | Size: 0x4
	m_twistHighLimitRestitution: 104n, // float32 m_twistHighLimitRestitution; |  0x68 | Schema_Builtin | Size: 0x4
	m_twistHighLimitSpring: 108n, // float32 m_twistHighLimitSpring; |  0x6c | Schema_Builtin | Size: 0x4
	m_twistHighLimitDamping: 112n, // float32 m_twistHighLimitDamping; |  0x70 | Schema_Builtin | Size: 0x4
	m_swing1LimitValue: 116n, // float32 m_swing1LimitValue; |  0x74 | Schema_Builtin | Size: 0x4
	m_swing1LimitRestitution: 120n, // float32 m_swing1LimitRestitution; |  0x78 | Schema_Builtin | Size: 0x4
	m_swing1LimitSpring: 124n, // float32 m_swing1LimitSpring; |  0x7c | Schema_Builtin | Size: 0x4
	m_swing1LimitDamping: 128n, // float32 m_swing1LimitDamping; |  0x80 | Schema_Builtin | Size: 0x4
	m_swing2LimitValue: 132n, // float32 m_swing2LimitValue; |  0x84 | Schema_Builtin | Size: 0x4
	m_swing2LimitRestitution: 136n, // float32 m_swing2LimitRestitution; |  0x88 | Schema_Builtin | Size: 0x4
	m_swing2LimitSpring: 140n, // float32 m_swing2LimitSpring; |  0x8c | Schema_Builtin | Size: 0x4
	m_swing2LimitDamping: 144n, // float32 m_swing2LimitDamping; |  0x90 | Schema_Builtin | Size: 0x4
	m_goalPosition: 148n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_goalOrientation: 160n, // GlobalTypes::QuaternionStorage  | Schema_Atomic | Size: 0x10
	m_goalAngularVelocity: 176n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_driveSpringX: 188n, // float32 m_driveSpringX; |  0xbc | Schema_Builtin | Size: 0x4
	m_driveSpringY: 192n, // float32 m_driveSpringY; |  0xc0 | Schema_Builtin | Size: 0x4
	m_driveSpringZ: 196n, // float32 m_driveSpringZ; |  0xc4 | Schema_Builtin | Size: 0x4
	m_driveDampingX: 200n, // float32 m_driveDampingX; |  0xc8 | Schema_Builtin | Size: 0x4
	m_driveDampingY: 204n, // float32 m_driveDampingY; |  0xcc | Schema_Builtin | Size: 0x4
	m_driveDampingZ: 208n, // float32 m_driveDampingZ; |  0xd0 | Schema_Builtin | Size: 0x4
	m_driveSpringTwist: 212n, // float32 m_driveSpringTwist; |  0xd4 | Schema_Builtin | Size: 0x4
	m_driveSpringSwing: 216n, // float32 m_driveSpringSwing; |  0xd8 | Schema_Builtin | Size: 0x4
	m_driveSpringSlerp: 220n, // float32 m_driveSpringSlerp; |  0xdc | Schema_Builtin | Size: 0x4
	m_driveDampingTwist: 224n, // float32 m_driveDampingTwist; |  0xe0 | Schema_Builtin | Size: 0x4
	m_driveDampingSwing: 228n, // float32 m_driveDampingSwing; |  0xe4 | Schema_Builtin | Size: 0x4
	m_driveDampingSlerp: 232n, // float32 m_driveDampingSlerp; |  0xe8 | Schema_Builtin | Size: 0x4
	m_solverIterationCount: 236n, // int32_t m_solverIterationCount; |  0xec | Schema_Builtin | Size: 0x4
	m_projectionLinearTolerance: 240n, // float32 m_projectionLinearTolerance; |  0xf0 | Schema_Builtin | Size: 0x4
	m_projectionAngularTolerance: 244n, // float32 m_projectionAngularTolerance; |  0xf4 | Schema_Builtin | Size: 0x4
}
