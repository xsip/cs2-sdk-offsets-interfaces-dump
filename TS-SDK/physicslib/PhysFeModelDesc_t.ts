// generated - do not edit!

// Class size: 0x6E0
// BaseClass: NONE
export const physicslib_PhysFeModelDesc_t  = {
	m_CtrlHash: 0n, // GlobalTypes::CUtlVector  | Schema_Atomic | Size: 0x18
	m_CtrlName: 24n, // GlobalTypes::CUtlVector<GlobalTypes::CUtlString>  | Schema_Atomic | Size: 0x18
	m_nStaticNodeFlags: 48n, // uint32_t m_nStaticNodeFlags; |  0x30 | Schema_Builtin | Size: 0x4
	m_nDynamicNodeFlags: 52n, // uint32_t m_nDynamicNodeFlags; |  0x34 | Schema_Builtin | Size: 0x4
	m_flLocalForce: 56n, // float32 m_flLocalForce; |  0x38 | Schema_Builtin | Size: 0x4
	m_flLocalRotation: 60n, // float32 m_flLocalRotation; |  0x3c | Schema_Builtin | Size: 0x4
	m_nNodeCount: 64n, // uint16_t m_nNodeCount; |  0x40 | Schema_Builtin | Size: 0x2
	m_nStaticNodes: 66n, // uint16_t m_nStaticNodes; |  0x42 | Schema_Builtin | Size: 0x2
	m_nRotLockStaticNodes: 68n, // uint16_t m_nRotLockStaticNodes; |  0x44 | Schema_Builtin | Size: 0x2
	m_nFirstPositionDrivenNode: 70n, // uint16_t m_nFirstPositionDrivenNode; |  0x46 | Schema_Builtin | Size: 0x2
	m_nSimdTriCount1: 72n, // uint16_t m_nSimdTriCount1; |  0x48 | Schema_Builtin | Size: 0x2
	m_nSimdTriCount2: 74n, // uint16_t m_nSimdTriCount2; |  0x4a | Schema_Builtin | Size: 0x2
	m_nSimdQuadCount1: 76n, // uint16_t m_nSimdQuadCount1; |  0x4c | Schema_Builtin | Size: 0x2
	m_nSimdQuadCount2: 78n, // uint16_t m_nSimdQuadCount2; |  0x4e | Schema_Builtin | Size: 0x2
	m_nQuadCount1: 80n, // uint16_t m_nQuadCount1; |  0x50 | Schema_Builtin | Size: 0x2
	m_nQuadCount2: 82n, // uint16_t m_nQuadCount2; |  0x52 | Schema_Builtin | Size: 0x2
	m_nTreeDepth: 84n, // uint16_t m_nTreeDepth; |  0x54 | Schema_Builtin | Size: 0x2
	m_nNodeBaseJiggleboneDependsCount: 86n, // uint16_t m_nNodeBaseJiggleboneDependsCount; |  0x56 | Schema_Builtin | Size: 0x2
	m_nRopeCount: 88n, // uint16_t m_nRopeCount; |  0x58 | Schema_Builtin | Size: 0x2
	m_Ropes: 96n, // GlobalTypes::CUtlVector  | Schema_Atomic | Size: 0x18
	m_NodeBases: 120n, // GlobalTypes::CUtlVector<physicslib::FeNodeBase_t>  | Schema_Atomic | Size: 0x18
	m_SimdNodeBases: 144n, // GlobalTypes::CUtlVector<physicslib::FeSimdNodeBase_t>  | Schema_Atomic | Size: 0x18
	m_Quads: 168n, // GlobalTypes::CUtlVector<physicslib::FeQuad_t>  | Schema_Atomic | Size: 0x18
	m_SimdQuads: 192n, // GlobalTypes::CUtlVector<physicslib::FeSimdQuad_t>  | Schema_Atomic | Size: 0x18
	m_SimdTris: 216n, // GlobalTypes::CUtlVector<physicslib::FeSimdTri_t>  | Schema_Atomic | Size: 0x18
	m_SimdRods: 240n, // GlobalTypes::CUtlVector<physicslib::FeSimdRodConstraint_t>  | Schema_Atomic | Size: 0x18
	m_SimdRodsAnim: 264n, // GlobalTypes::CUtlVector<physicslib::FeSimdRodConstraintAnim_t>  | Schema_Atomic | Size: 0x18
	m_InitPose: 288n, // GlobalTypes::CUtlVector<GlobalTypes::CTransform>  | Schema_Atomic | Size: 0x18
	m_Rods: 312n, // GlobalTypes::CUtlVector<physicslib::FeRodConstraint_t>  | Schema_Atomic | Size: 0x18
	m_Twists: 336n, // GlobalTypes::CUtlVector<physicslib::FeTwistConstraint_t>  | Schema_Atomic | Size: 0x18
	m_HingeLimits: 360n, // GlobalTypes::CUtlVector<physicslib::FeHingeLimit_t>  | Schema_Atomic | Size: 0x18
	m_AntiTunnelBytecode: 384n, // GlobalTypes::CUtlVector  | Schema_Atomic | Size: 0x18
	m_DynKinLinks: 408n, // GlobalTypes::CUtlVector<physicslib::FeDynKinLink_t>  | Schema_Atomic | Size: 0x18
	m_AntiTunnelProbes: 432n, // GlobalTypes::CUtlVector<physicslib::FeAntiTunnelProbe_t>  | Schema_Atomic | Size: 0x18
	m_AntiTunnelTargetNodes: 456n, // GlobalTypes::CUtlVector  | Schema_Atomic | Size: 0x18
	m_NodeStrayBoxes: 480n, // GlobalTypes::CUtlVector<physicslib::FeNodeStrayBox_t>  | Schema_Atomic | Size: 0x18
	m_AxialEdges: 504n, // GlobalTypes::CUtlVector<physicslib::FeAxialEdgeBend_t>  | Schema_Atomic | Size: 0x18
	m_NodeInvMasses: 528n, // GlobalTypes::CUtlVector  | Schema_Atomic | Size: 0x18
	m_CtrlOffsets: 552n, // GlobalTypes::CUtlVector<physicslib::FeCtrlOffset_t>  | Schema_Atomic | Size: 0x18
	m_CtrlOsOffsets: 576n, // GlobalTypes::CUtlVector<physicslib::FeCtrlOsOffset_t>  | Schema_Atomic | Size: 0x18
	m_FollowNodes: 600n, // GlobalTypes::CUtlVector<physicslib::FeFollowNode_t>  | Schema_Atomic | Size: 0x18
	m_CollisionPlanes: 624n, // GlobalTypes::CUtlVector<physicslib::FeCollisionPlane_t>  | Schema_Atomic | Size: 0x18
	m_NodeIntegrator: 648n, // GlobalTypes::CUtlVector<physicslib::FeNodeIntegrator_t>  | Schema_Atomic | Size: 0x18
	m_SpringIntegrator: 672n, // GlobalTypes::CUtlVector<physicslib::FeSpringIntegrator_t>  | Schema_Atomic | Size: 0x18
	m_SimdSpringIntegrator: 696n, // GlobalTypes::CUtlVector<physicslib::FeSimdSpringIntegrator_t>  | Schema_Atomic | Size: 0x18
	m_WorldCollisionParams: 720n, // GlobalTypes::CUtlVector<physicslib::FeWorldCollisionParams_t>  | Schema_Atomic | Size: 0x18
	m_LegacyStretchForce: 744n, // GlobalTypes::CUtlVector  | Schema_Atomic | Size: 0x18
	m_NodeCollisionRadii: 768n, // GlobalTypes::CUtlVector  | Schema_Atomic | Size: 0x18
	m_DynNodeFriction: 792n, // GlobalTypes::CUtlVector  | Schema_Atomic | Size: 0x18
	m_LocalRotation: 816n, // GlobalTypes::CUtlVector  | Schema_Atomic | Size: 0x18
	m_LocalForce: 840n, // GlobalTypes::CUtlVector  | Schema_Atomic | Size: 0x18
	m_TaperedCapsuleStretches: 864n, // GlobalTypes::CUtlVector<physicslib::FeTaperedCapsuleStretch_t>  | Schema_Atomic | Size: 0x18
	m_TaperedCapsuleRigids: 888n, // GlobalTypes::CUtlVector<physicslib::FeTaperedCapsuleRigid_t>  | Schema_Atomic | Size: 0x18
	m_SphereRigids: 912n, // GlobalTypes::CUtlVector<physicslib::FeSphereRigid_t>  | Schema_Atomic | Size: 0x18
	m_WorldCollisionNodes: 936n, // GlobalTypes::CUtlVector  | Schema_Atomic | Size: 0x18
	m_TreeParents: 960n, // GlobalTypes::CUtlVector  | Schema_Atomic | Size: 0x18
	m_TreeCollisionMasks: 984n, // GlobalTypes::CUtlVector  | Schema_Atomic | Size: 0x18
	m_TreeChildren: 1008n, // GlobalTypes::CUtlVector<physicslib::FeTreeChildren_t>  | Schema_Atomic | Size: 0x18
	m_FreeNodes: 1032n, // GlobalTypes::CUtlVector  | Schema_Atomic | Size: 0x18
	m_FitMatrices: 1056n, // GlobalTypes::CUtlVector<physicslib::FeFitMatrix_t>  | Schema_Atomic | Size: 0x18
	m_FitWeights: 1080n, // GlobalTypes::CUtlVector<physicslib::FeFitWeight_t>  | Schema_Atomic | Size: 0x18
	m_ReverseOffsets: 1104n, // GlobalTypes::CUtlVector<physicslib::FeNodeReverseOffset_t>  | Schema_Atomic | Size: 0x18
	m_AnimStrayRadii: 1128n, // GlobalTypes::CUtlVector<physicslib::FeAnimStrayRadius_t>  | Schema_Atomic | Size: 0x18
	m_SimdAnimStrayRadii: 1152n, // GlobalTypes::CUtlVector<physicslib::FeSimdAnimStrayRadius_t>  | Schema_Atomic | Size: 0x18
	m_KelagerBends: 1176n, // GlobalTypes::CUtlVector<physicslib::FeKelagerBend2_t>  | Schema_Atomic | Size: 0x18
	m_CtrlSoftOffsets: 1200n, // GlobalTypes::CUtlVector<physicslib::FeCtrlSoftOffset_t>  | Schema_Atomic | Size: 0x18
	m_JiggleBones: 1224n, // GlobalTypes::CUtlVector<physicslib::CFeIndexedJiggleBone>  | Schema_Atomic | Size: 0x18
	m_SourceElems: 1248n, // GlobalTypes::CUtlVector  | Schema_Atomic | Size: 0x18
	m_GoalDampedSpringIntegrators: 1272n, // GlobalTypes::CUtlVector  | Schema_Atomic | Size: 0x18
	m_Tris: 1296n, // GlobalTypes::CUtlVector<physicslib::FeTri_t>  | Schema_Atomic | Size: 0x18
	m_nTriCount1: 1320n, // uint16_t m_nTriCount1; |  0x528 | Schema_Builtin | Size: 0x2
	m_nTriCount2: 1322n, // uint16_t m_nTriCount2; |  0x52a | Schema_Builtin | Size: 0x2
	m_nReservedUint8: 1324n, // uint8_t m_nReservedUint8; |  0x52c | Schema_Builtin | Size: 0x1
	m_nExtraPressureIterations: 1325n, // uint8_t m_nExtraPressureIterations; |  0x52d | Schema_Builtin | Size: 0x1
	m_nExtraGoalIterations: 1326n, // uint8_t m_nExtraGoalIterations; |  0x52e | Schema_Builtin | Size: 0x1
	m_nExtraIterations: 1327n, // uint8_t m_nExtraIterations; |  0x52f | Schema_Builtin | Size: 0x1
	m_SDFRigids: 1328n, // GlobalTypes::CUtlVector<physicslib::FeSDFRigid_t>  | Schema_Atomic | Size: 0x18
	m_BoxRigids: 1352n, // GlobalTypes::CUtlVector<physicslib::FeBoxRigid_t>  | Schema_Atomic | Size: 0x18
	m_DynNodeVertexSet: 1376n, // GlobalTypes::CUtlVector  | Schema_Atomic | Size: 0x18
	m_VertexSetNames: 1400n, // GlobalTypes::CUtlVector  | Schema_Atomic | Size: 0x18
	m_RigidColliderPriorities: 1424n, // GlobalTypes::CUtlVector<physicslib::FeRigidColliderIndices_t>  | Schema_Atomic | Size: 0x18
	m_MorphLayers: 1448n, // GlobalTypes::CUtlVector<physicslib::FeMorphLayerDepr_t>  | Schema_Atomic | Size: 0x18
	m_MorphSetData: 1472n, // GlobalTypes::CUtlVector  | Schema_Atomic | Size: 0x18
	m_VertexMaps: 1496n, // GlobalTypes::CUtlVector<physicslib::FeVertexMapDesc_t>  | Schema_Atomic | Size: 0x18
	m_VertexMapValues: 1520n, // GlobalTypes::CUtlVector  | Schema_Atomic | Size: 0x18
	m_Effects: 1544n, // GlobalTypes::CUtlVector<physicslib::FeEffectDesc_t>  | Schema_Atomic | Size: 0x18
	m_LockToParent: 1568n, // GlobalTypes::CUtlVector<physicslib::FeCtrlOffset_t>  | Schema_Atomic | Size: 0x18
	m_LockToGoal: 1592n, // GlobalTypes::CUtlVector  | Schema_Atomic | Size: 0x18
	m_SkelParents: 1616n, // GlobalTypes::CUtlVector  | Schema_Atomic | Size: 0x18
	m_DynNodeWindBases: 1640n, // GlobalTypes::CUtlVector<physicslib::FeNodeWindBase_t>  | Schema_Atomic | Size: 0x18
	m_SelfCollisionLayers: 1664n, // GlobalTypes::CUtlVector<physicslib::FeModelSelfCollisionLayer_t>  | Schema_Atomic | Size: 0x18
	m_flInternalPressure: 1688n, // float32 m_flInternalPressure; |  0x698 | Schema_Builtin | Size: 0x4
	m_flDefaultTimeDilation: 1692n, // float32 m_flDefaultTimeDilation; |  0x69c | Schema_Builtin | Size: 0x4
	m_flWindage: 1696n, // float32 m_flWindage; |  0x6a0 | Schema_Builtin | Size: 0x4
	m_flWindDrag: 1700n, // float32 m_flWindDrag; |  0x6a4 | Schema_Builtin | Size: 0x4
	m_flDefaultSurfaceStretch: 1704n, // float32 m_flDefaultSurfaceStretch; |  0x6a8 | Schema_Builtin | Size: 0x4
	m_flDefaultThreadStretch: 1708n, // float32 m_flDefaultThreadStretch; |  0x6ac | Schema_Builtin | Size: 0x4
	m_flDefaultGravityScale: 1712n, // float32 m_flDefaultGravityScale; |  0x6b0 | Schema_Builtin | Size: 0x4
	m_flDefaultVelAirDrag: 1716n, // float32 m_flDefaultVelAirDrag; |  0x6b4 | Schema_Builtin | Size: 0x4
	m_flDefaultExpAirDrag: 1720n, // float32 m_flDefaultExpAirDrag; |  0x6b8 | Schema_Builtin | Size: 0x4
	m_flDefaultVelQuadAirDrag: 1724n, // float32 m_flDefaultVelQuadAirDrag; |  0x6bc | Schema_Builtin | Size: 0x4
	m_flDefaultExpQuadAirDrag: 1728n, // float32 m_flDefaultExpQuadAirDrag; |  0x6c0 | Schema_Builtin | Size: 0x4
	m_flRodVelocitySmoothRate: 1732n, // float32 m_flRodVelocitySmoothRate; |  0x6c4 | Schema_Builtin | Size: 0x4
	m_flQuadVelocitySmoothRate: 1736n, // float32 m_flQuadVelocitySmoothRate; |  0x6c8 | Schema_Builtin | Size: 0x4
	m_flAddWorldCollisionRadius: 1740n, // float32 m_flAddWorldCollisionRadius; |  0x6cc | Schema_Builtin | Size: 0x4
	m_flDefaultVolumetricSolveAmount: 1744n, // float32 m_flDefaultVolumetricSolveAmount; |  0x6d0 | Schema_Builtin | Size: 0x4
	m_flMotionSmoothCDT: 1748n, // float32 m_flMotionSmoothCDT; |  0x6d4 | Schema_Builtin | Size: 0x4
	m_flLocalDrag1: 1752n, // float32 m_flLocalDrag1; |  0x6d8 | Schema_Builtin | Size: 0x4
	m_nRodVelocitySmoothIterations: 1756n, // uint16_t m_nRodVelocitySmoothIterations; |  0x6dc | Schema_Builtin | Size: 0x2
	m_nQuadVelocitySmoothIterations: 1758n, // uint16_t m_nQuadVelocitySmoothIterations; |  0x6de | Schema_Builtin | Size: 0x2
}
