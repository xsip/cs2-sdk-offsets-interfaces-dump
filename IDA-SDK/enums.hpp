#pragma once

enum animgraphlib_AimMatrixBlendMode : uint32_t {
			AimMatrixBlendMode_AimMatrixBlendMode_Additive = 0x1,
			AimMatrixBlendMode_AimMatrixBlendMode_BoneMask = 0x3,
			AimMatrixBlendMode_AimMatrixBlendMode_ModelSpaceAdditive = 0x2,
			AimMatrixBlendMode_AimMatrixBlendMode_None = 0x0
		};

enum animgraphlib_DampingSpeedFunction : uint32_t {
			DampingSpeedFunction_AsymmetricSpring = 0x3,
			DampingSpeedFunction_Constant = 0x1,
			DampingSpeedFunction_NoDamping = 0x0,
			DampingSpeedFunction_Spring = 0x2
		};

enum animgraphlib_PoseType_t : uint8_t {
			PoseType_t_POSETYPE_DYNAMIC = 0x1,
			PoseType_t_POSETYPE_INVALID = 0xff,
			PoseType_t_POSETYPE_STATIC = 0x0
		};

enum animgraphlib_AnimNodeNetworkMode : uint32_t {
			AnimNodeNetworkMode_ClientSimulate = 0x1,
			AnimNodeNetworkMode_ServerAuthoritative = 0x0
		};

enum animgraphlib_BinaryNodeChildOption : uint32_t {
			BinaryNodeChildOption_Child1 = 0x0,
			BinaryNodeChildOption_Child2 = 0x1
		};

enum animgraphlib_BinaryNodeTiming : uint32_t {
			BinaryNodeTiming_SyncChildren = 0x2,
			BinaryNodeTiming_UseChild1 = 0x0,
			BinaryNodeTiming_UseChild2 = 0x1
		};

enum animgraphlib_AnimParamType_t : uint8_t {
			AnimParamType_t_ANIMPARAM_BOOL = 0x1,
			AnimParamType_t_ANIMPARAM_COUNT = 0x8,
			AnimParamType_t_ANIMPARAM_ENUM = 0x2,
			AnimParamType_t_ANIMPARAM_FLOAT = 0x4,
			AnimParamType_t_ANIMPARAM_GLOBALSYMBOL = 0x7,
			AnimParamType_t_ANIMPARAM_INT = 0x3,
			AnimParamType_t_ANIMPARAM_QUATERNION = 0x6,
			AnimParamType_t_ANIMPARAM_UNKNOWN = 0x0,
			AnimParamType_t_ANIMPARAM_VECTOR = 0x5
		};

enum animgraphlib_AnimVectorSource : uint32_t {
			AnimVectorSource_Acceleration = 0x5,
			AnimVectorSource_FacingPosition = 0x1,
			AnimVectorSource_GoalPosition = 0xb,
			AnimVectorSource_LookDirection = 0x2,
			AnimVectorSource_LookTarget = 0x8,
			AnimVectorSource_LookTarget_WorldSpace = 0x9,
			AnimVectorSource_ManualTarget_WorldSpace = 0xd,
			AnimVectorSource_MoveDirection = 0x0,
			AnimVectorSource_RootMotionVelocity = 0xc,
			AnimVectorSource_SlopeNormal = 0x6,
			AnimVectorSource_SlopeNormal_WorldSpace = 0x7,
			AnimVectorSource_VectorParameter = 0x3,
			AnimVectorSource_WayPointDirection = 0x4,
			AnimVectorSource_WayPointPosition = 0xa
		};

enum animgraphlib_EDemoBoneSelectionMode : uint32_t {
			EDemoBoneSelectionMode_CaptureAllBones = 0x0,
			EDemoBoneSelectionMode_CaptureSelectedBones = 0x1
		};

enum animgraphlib_CAnimationGraphVisualizerPrimitiveType : uint32_t {
			CAnimationGraphVisualizerPrimitiveType_ANIMATIONGRAPHVISUALIZERPRIMITIVETYPE_Axis = 0x4,
			CAnimationGraphVisualizerPrimitiveType_ANIMATIONGRAPHVISUALIZERPRIMITIVETYPE_Line = 0x2,
			CAnimationGraphVisualizerPrimitiveType_ANIMATIONGRAPHVISUALIZERPRIMITIVETYPE_Pie = 0x3,
			CAnimationGraphVisualizerPrimitiveType_ANIMATIONGRAPHVISUALIZERPRIMITIVETYPE_Sphere = 0x1,
			CAnimationGraphVisualizerPrimitiveType_ANIMATIONGRAPHVISUALIZERPRIMITIVETYPE_Text = 0x0
		};

enum animgraphlib_AnimValueSource : uint32_t {
			AnimValueSource_AccelerationFrontBack = 0x17,
			AnimValueSource_AccelerationHeading = 0xf,
			AnimValueSource_AccelerationLeftRight = 0x16,
			AnimValueSource_AccelerationSpeed = 0x10,
			AnimValueSource_BoundaryRadius = 0xc,
			AnimValueSource_FacingHeading = 0x4,
			AnimValueSource_FingerCurl_Index = 0x1d,
			AnimValueSource_FingerCurl_Middle = 0x1e,
			AnimValueSource_FingerCurl_Pinky = 0x20,
			AnimValueSource_FingerCurl_Ring = 0x1f,
			AnimValueSource_FingerCurl_Thumb = 0x1c,
			AnimValueSource_FingerSplay_Index_Middle = 0x22,
			AnimValueSource_FingerSplay_Middle_Ring = 0x23,
			AnimValueSource_FingerSplay_Ring_Pinky = 0x24,
			AnimValueSource_FingerSplay_Thumb_Index = 0x21,
			AnimValueSource_ForwardSpeed = 0x2,
			AnimValueSource_GoalDistance = 0x15,
			AnimValueSource_LookDistance = 0x8,
			AnimValueSource_LookHeading = 0x5,
			AnimValueSource_LookHeadingNormalized = 0x6,
			AnimValueSource_LookPitch = 0x7,
			AnimValueSource_MaxMoveSpeed = 0x1b,
			AnimValueSource_MoveHeading = 0x0,
			AnimValueSource_MoveHeadingRelativeToLookHeading = 0x1a,
			AnimValueSource_MoveSpeed = 0x1,
			AnimValueSource_Parameter = 0x9,
			AnimValueSource_RootMotionSpeed = 0x18,
			AnimValueSource_RootMotionTurnSpeed = 0x19,
			AnimValueSource_SlopeAngle = 0x12,
			AnimValueSource_SlopeHeading = 0x11,
			AnimValueSource_SlopePitch = 0x13,
			AnimValueSource_SlopeYaw = 0x14,
			AnimValueSource_StrafeSpeed = 0x3,
			AnimValueSource_TargetMoveHeading = 0xd,
			AnimValueSource_TargetMoveSpeed = 0xe,
			AnimValueSource_WayPointDistance = 0xb,
			AnimValueSource_WayPointHeading = 0xa
		};

enum animgraphlib_Blend2DMode : uint32_t {
			Blend2DMode_Blend2DMode_Directional = 0x1,
			Blend2DMode_Blend2DMode_General = 0x0
		};

enum animgraphlib_LinearRootMotionBlendMode_t : uint32_t {
			LinearRootMotionBlendMode_t_LERP = 0x0,
			LinearRootMotionBlendMode_t_NLERP = 0x1,
			LinearRootMotionBlendMode_t_SLERP = 0x2
		};

enum animgraphlib_BlendKeyType : uint32_t {
			BlendKeyType_BlendKey_Distance = 0x2,
			BlendKeyType_BlendKey_RemainingDistance = 0x3,
			BlendKeyType_BlendKey_UserValue = 0x0,
			BlendKeyType_BlendKey_Velocity = 0x1
		};

enum animgraphlib_BoneMaskBlendSpace : uint32_t {
			BoneMaskBlendSpace_BlendSpace_Model = 0x1,
			BoneMaskBlendSpace_BlendSpace_Model_RotationOnly = 0x2,
			BoneMaskBlendSpace_BlendSpace_Model_TranslationOnly = 0x3,
			BoneMaskBlendSpace_BlendSpace_Parent = 0x0
		};

enum animgraphlib_AnimParamButton_t : uint32_t {
			AnimParamButton_t_ANIMPARAM_BUTTON_A = 0x5,
			AnimParamButton_t_ANIMPARAM_BUTTON_B = 0x6,
			AnimParamButton_t_ANIMPARAM_BUTTON_DPAD_DOWN = 0x3,
			AnimParamButton_t_ANIMPARAM_BUTTON_DPAD_LEFT = 0x4,
			AnimParamButton_t_ANIMPARAM_BUTTON_DPAD_RIGHT = 0x2,
			AnimParamButton_t_ANIMPARAM_BUTTON_DPAD_UP = 0x1,
			AnimParamButton_t_ANIMPARAM_BUTTON_LEFT_SHOULDER = 0x9,
			AnimParamButton_t_ANIMPARAM_BUTTON_LTRIGGER = 0xb,
			AnimParamButton_t_ANIMPARAM_BUTTON_NONE = 0x0,
			AnimParamButton_t_ANIMPARAM_BUTTON_RIGHT_SHOULDER = 0xa,
			AnimParamButton_t_ANIMPARAM_BUTTON_RTRIGGER = 0xc,
			AnimParamButton_t_ANIMPARAM_BUTTON_X = 0x7,
			AnimParamButton_t_ANIMPARAM_BUTTON_Y = 0x8
		};

enum animgraphlib_AnimParamNetworkSetting : uint32_t {
			AnimParamNetworkSetting_AlwaysNetwork = 0x1,
			AnimParamNetworkSetting_Auto = 0x0,
			AnimParamNetworkSetting_NeverNetwork = 0x2
		};

enum animgraphlib_ChoiceMethod : uint32_t {
			ChoiceMethod_Iterate = 0x2,
			ChoiceMethod_IterateRandom = 0x3,
			ChoiceMethod_WeightedRandom = 0x0,
			ChoiceMethod_WeightedRandomNoRepeat = 0x1
		};

enum animgraphlib_ChoiceChangeMethod : uint32_t {
			ChoiceChangeMethod_OnCycleEnd = 0x1,
			ChoiceChangeMethod_OnReset = 0x0,
			ChoiceChangeMethod_OnResetOrCycleEnd = 0x2
		};

enum animgraphlib_ChoiceBlendMethod : uint32_t {
			ChoiceBlendMethod_PerChoiceBlendTimes = 0x1,
			ChoiceBlendMethod_SingleBlendTime = 0x0
		};

enum animgraphlib_FootFallTagFoot_t : uint32_t {
			FootFallTagFoot_t_FOOT1 = 0x0,
			FootFallTagFoot_t_FOOT2 = 0x1,
			FootFallTagFoot_t_FOOT3 = 0x2,
			FootFallTagFoot_t_FOOT4 = 0x3,
			FootFallTagFoot_t_FOOT5 = 0x4,
			FootFallTagFoot_t_FOOT6 = 0x5,
			FootFallTagFoot_t_FOOT7 = 0x6,
			FootFallTagFoot_t_FOOT8 = 0x7
		};

enum animgraphlib_IKSolverType : uint32_t {
			IKSolverType_IKSOLVER_CCD = 0x4,
			IKSolverType_IKSOLVER_COUNT = 0x5,
			IKSolverType_IKSOLVER_DogLeg3Bone = 0x3,
			IKSolverType_IKSOLVER_Fabrik = 0x2,
			IKSolverType_IKSOLVER_Perlin = 0x0,
			IKSolverType_IKSOLVER_TwoBone = 0x1
		};

enum animgraphlib_FootPinningTimingSource : uint32_t {
			FootPinningTimingSource_FootMotion = 0x0,
			FootPinningTimingSource_Parameter = 0x2,
			FootPinningTimingSource_Tag = 0x1
		};

enum animgraphlib_FootstepLandedFootSoundType_t : uint32_t {
			FootstepLandedFootSoundType_t_FOOTSOUND_Left = 0x0,
			FootstepLandedFootSoundType_t_FOOTSOUND_Right = 0x1,
			FootstepLandedFootSoundType_t_FOOTSOUND_UseOverrideSound = 0x2
		};

enum animgraphlib_VelocityMetricMode : uint8_t {
			VelocityMetricMode_DirectionAndMagnitude = 0x2,
			VelocityMetricMode_DirectionOnly = 0x0,
			VelocityMetricMode_MagnitudeOnly = 0x1
		};

enum animgraphlib_JumpCorrectionMethod : uint32_t {
			JumpCorrectionMethod_AddCorrectionDelta = 0x1,
			JumpCorrectionMethod_ScaleMotion = 0x0
		};

enum animgraphlib_MatterialAttributeTagType_t : uint32_t {
			MatterialAttributeTagType_t_MATERIAL_ATTRIBUTE_TAG_COLOR = 0x1,
			MatterialAttributeTagType_t_MATERIAL_ATTRIBUTE_TAG_VALUE = 0x0
		};

enum animationsystem_ParticleAttachment_t : uint32_t {
			ParticleAttachment_t_MAX_PATTACH_TYPES = 0x10,
			ParticleAttachment_t_PATTACH_ABSORIGIN = 0x0,
			ParticleAttachment_t_PATTACH_ABSORIGIN_FOLLOW = 0x1,
			ParticleAttachment_t_PATTACH_CENTER_FOLLOW = 0xd,
			ParticleAttachment_t_PATTACH_CUSTOMORIGIN = 0x2,
			ParticleAttachment_t_PATTACH_CUSTOMORIGIN_FOLLOW = 0x3,
			ParticleAttachment_t_PATTACH_CUSTOM_GAME_STATE_1 = 0xe,
			ParticleAttachment_t_PATTACH_EYES_FOLLOW = 0x6,
			ParticleAttachment_t_PATTACH_HEALTHBAR = 0xf,
			ParticleAttachment_t_PATTACH_INVALID = 0xffffffff,
			ParticleAttachment_t_PATTACH_MAIN_VIEW = 0xb,
			ParticleAttachment_t_PATTACH_OVERHEAD_FOLLOW = 0x7,
			ParticleAttachment_t_PATTACH_POINT = 0x4,
			ParticleAttachment_t_PATTACH_POINT_FOLLOW = 0x5,
			ParticleAttachment_t_PATTACH_RENDERORIGIN_FOLLOW = 0xa,
			ParticleAttachment_t_PATTACH_ROOTBONE_FOLLOW = 0x9,
			ParticleAttachment_t_PATTACH_WATERWAKE = 0xc,
			ParticleAttachment_t_PATTACH_WORLDORIGIN = 0x8
		};

enum animgraphlib_SelectorTagBehavior_t : uint32_t {
			SelectorTagBehavior_t_SelectorTagBehavior_OffBeforeFinished = 0x2,
			SelectorTagBehavior_t_SelectorTagBehavior_OffWhenFinished = 0x1,
			SelectorTagBehavior_t_SelectorTagBehavior_OnWhileCurrent = 0x0
		};

enum animgraphlib_StateActionBehavior : uint32_t {
			StateActionBehavior_STATETAGBEHAVIOR_ACTIVE_WHILE_CURRENT = 0x0,
			StateActionBehavior_STATETAGBEHAVIOR_ACTIVE_WHILE_FULLY_BLENDED = 0x4,
			StateActionBehavior_STATETAGBEHAVIOR_FIRE_ON_ENTER = 0x1,
			StateActionBehavior_STATETAGBEHAVIOR_FIRE_ON_ENTER_AND_EXIT = 0x3,
			StateActionBehavior_STATETAGBEHAVIOR_FIRE_ON_EXIT = 0x2
		};

enum animgraphlib_TargetSelectorAngleMode_t : uint32_t {
			TargetSelectorAngleMode_t_eFacingHeading = 0x0,
			TargetSelectorAngleMode_t_eMoveHeading = 0x1
		};

enum animgraphlib_AnimParamVectorType_t : uint32_t {
			AnimParamVectorType_t_ANIMPARAM_VECTOR_TYPE_DIRECTION_LS = 0x4,
			AnimParamVectorType_t_ANIMPARAM_VECTOR_TYPE_DIRECTION_WS = 0x3,
			AnimParamVectorType_t_ANIMPARAM_VECTOR_TYPE_NONE = 0x0,
			AnimParamVectorType_t_ANIMPARAM_VECTOR_TYPE_POSITION_LS = 0x2,
			AnimParamVectorType_t_ANIMPARAM_VECTOR_TYPE_POSITION_WS = 0x1
		};

enum animgraphlib_SolveIKChainAnimNodeDebugSetting : uint32_t {
			SolveIKChainAnimNodeDebugSetting_SOLVEIKCHAINANIMNODEDEBUGSETTING_Forward = 0x4,
			SolveIKChainAnimNodeDebugSetting_SOLVEIKCHAINANIMNODEDEBUGSETTING_Left = 0x6,
			SolveIKChainAnimNodeDebugSetting_SOLVEIKCHAINANIMNODEDEBUGSETTING_None = 0x0,
			SolveIKChainAnimNodeDebugSetting_SOLVEIKCHAINANIMNODEDEBUGSETTING_Up = 0x5,
			SolveIKChainAnimNodeDebugSetting_SOLVEIKCHAINANIMNODEDEBUGSETTING_X_Axis_Circle = 0x1,
			SolveIKChainAnimNodeDebugSetting_SOLVEIKCHAINANIMNODEDEBUGSETTING_Y_Axis_Circle = 0x2,
			SolveIKChainAnimNodeDebugSetting_SOLVEIKCHAINANIMNODEDEBUGSETTING_Z_Axis_Circle = 0x3
		};

enum animgraphlib_EIKEndEffectorRotationFixUpMode : uint32_t {
			EIKEndEffectorRotationFixUpMode_Count = 0x4,
			EIKEndEffectorRotationFixUpMode_LookAtTargetForward = 0x2,
			EIKEndEffectorRotationFixUpMode_MaintainParentOrientation = 0x3,
			EIKEndEffectorRotationFixUpMode_MatchTargetOrientation = 0x1,
			EIKEndEffectorRotationFixUpMode_None = 0x0
		};

enum animgraphlib_IKTargetSource : uint32_t {
			IKTargetSource_IKTARGETSOURCE_AnimgraphParameter = 0x1,
			IKTargetSource_IKTARGETSOURCE_Bone = 0x0,
			IKTargetSource_IKTARGETSOURCE_COUNT = 0x2
		};

enum animgraphlib_IKTargetCoordinateSystem : uint32_t {
			IKTargetCoordinateSystem_IKTARGETCOORDINATESYSTEM_COUNT = 0x2,
			IKTargetCoordinateSystem_IKTARGETCOORDINATESYSTEM_ModelSpace = 0x1,
			IKTargetCoordinateSystem_IKTARGETCOORDINATESYSTEM_WorldSpace = 0x0
		};

enum animgraphlib_StepPhase : uint32_t {
			StepPhase_StepPhase_InAir = 0x1,
			StepPhase_StepPhase_OnGround = 0x0
		};

enum animgraphlib_IKChannelMode : uint32_t {
			IKChannelMode_OneBone = 0x2,
			IKChannelMode_OneBone_Translate = 0x3,
			IKChannelMode_TwoBone = 0x0,
			IKChannelMode_TwoBone_Translate = 0x1
		};

enum animgraphlib_JiggleBoneSimSpace : uint32_t {
			JiggleBoneSimSpace_SimSpace_Local = 0x0,
			JiggleBoneSimSpace_SimSpace_Model = 0x1,
			JiggleBoneSimSpace_SimSpace_World = 0x2
		};

enum animgraphlib_AnimScriptType : uint16_t {
			AnimScriptType_ANIMSCRIPT_FUSE_GENERAL = 0x0,
			AnimScriptType_ANIMSCRIPT_FUSE_STATEMACHINE = 0x1,
			AnimScriptType_ANIMSCRIPT_TYPE_INVALID = 0xffff
		};

enum animgraphlib_IkEndEffectorType : uint32_t {
			IkEndEffectorType_IkEndEffector_Attachment = 0x0,
			IkEndEffectorType_IkEndEffector_Bone = 0x1
		};

enum animgraphlib_IkTargetType : uint32_t {
			IkTargetType_IkTarget_Attachment = 0x0,
			IkTargetType_IkTarget_Bone = 0x1,
			IkTargetType_IkTarget_Parameter_ModelSpace = 0x2,
			IkTargetType_IkTarget_Parameter_WorldSpace = 0x3
		};

enum animgraphlib_OrientationWarpMode_t : uint32_t {
			OrientationWarpMode_t_eAngle = 0x1,
			OrientationWarpMode_t_eInvalid = 0x0,
			OrientationWarpMode_t_eWorldPosition = 0x2
		};

enum animgraphlib_OrientationWarpTargetOffsetMode_t : uint32_t {
			OrientationWarpTargetOffsetMode_t_eAnimationMovementHeading = 0x2,
			OrientationWarpTargetOffsetMode_t_eAnimationMovementHeadingAtEnd = 0x3,
			OrientationWarpTargetOffsetMode_t_eLiteralValue = 0x0,
			OrientationWarpTargetOffsetMode_t_eParameter = 0x1
		};

enum animgraphlib_OrientationWarpRootMotionSource_t : uint32_t {
			OrientationWarpRootMotionSource_t_eAnimationOnly = 0x1,
			OrientationWarpRootMotionSource_t_eAnimationOrProcedural = 0x0,
			OrientationWarpRootMotionSource_t_eProceduralOnly = 0x2
		};

enum animgraphlib_RagdollPoseControl : uint32_t {
			RagdollPoseControl_Absolute = 0x0
		};

enum animgraphlib_StanceOverrideMode : uint32_t {
			StanceOverrideMode_Node = 0x1,
			StanceOverrideMode_Sequence = 0x0
		};

enum animgraphlib_TargetWarpAngleMode_t : uint32_t {
			TargetWarpAngleMode_t_eFacingHeading = 0x0,
			TargetWarpAngleMode_t_eMoveHeading = 0x1
		};

enum animgraphlib_TargetWarpCorrectionMethod : uint32_t {
			TargetWarpCorrectionMethod_AddCorrectionDelta = 0x1,
			TargetWarpCorrectionMethod_ScaleMotion = 0x0
		};

enum animgraphlib_TargetWarpTimingMethod : uint32_t {
			TargetWarpTimingMethod_ReachDestinationOnRootMotionEnd = 0x0,
			TargetWarpTimingMethod_ReachDestinationOnWarpTagEnd = 0x1
		};

enum modellib_FlexOpCode_t : uint32_t {
			FlexOpCode_t_FLEX_OP_2WAY_0 = 0xf,
			FlexOpCode_t_FLEX_OP_2WAY_1 = 0x10,
			FlexOpCode_t_FLEX_OP_ABS = 0x1a,
			FlexOpCode_t_FLEX_OP_ADD = 0x4,
			FlexOpCode_t_FLEX_OP_CLOSE = 0xb,
			FlexOpCode_t_FLEX_OP_COMBO = 0x12,
			FlexOpCode_t_FLEX_OP_COMMA = 0xc,
			FlexOpCode_t_FLEX_OP_CONST = 0x1,
			FlexOpCode_t_FLEX_OP_COS = 0x19,
			FlexOpCode_t_FLEX_OP_DIV = 0x7,
			FlexOpCode_t_FLEX_OP_DME_LOWER_EYELID = 0x14,
			FlexOpCode_t_FLEX_OP_DME_UPPER_EYELID = 0x15,
			FlexOpCode_t_FLEX_OP_DOMINATE = 0x13,
			FlexOpCode_t_FLEX_OP_EXP = 0x9,
			FlexOpCode_t_FLEX_OP_FETCH1 = 0x2,
			FlexOpCode_t_FLEX_OP_FETCH2 = 0x3,
			FlexOpCode_t_FLEX_OP_MAX = 0xd,
			FlexOpCode_t_FLEX_OP_MIN = 0xe,
			FlexOpCode_t_FLEX_OP_MUL = 0x6,
			FlexOpCode_t_FLEX_OP_NEG = 0x8,
			FlexOpCode_t_FLEX_OP_NWAY = 0x11,
			FlexOpCode_t_FLEX_OP_OPEN = 0xa,
			FlexOpCode_t_FLEX_OP_REMAPVALCLAMPED = 0x17,
			FlexOpCode_t_FLEX_OP_SIN = 0x18,
			FlexOpCode_t_FLEX_OP_SQRT = 0x16,
			FlexOpCode_t_FLEX_OP_SUB = 0x5
		};

enum modellib_RenderPrimitiveType_t : uint32_t {
			RenderPrimitiveType_t_RENDER_PRIM_COMPUTE_SHADER = 0xb,
			RenderPrimitiveType_t_RENDER_PRIM_HETEROGENOUS = 0xa,
			RenderPrimitiveType_t_RENDER_PRIM_INSTANCED_QUADS = 0x9,
			RenderPrimitiveType_t_RENDER_PRIM_LINES = 0x1,
			RenderPrimitiveType_t_RENDER_PRIM_LINES_WITH_ADJACENCY = 0x2,
			RenderPrimitiveType_t_RENDER_PRIM_LINE_STRIP = 0x3,
			RenderPrimitiveType_t_RENDER_PRIM_LINE_STRIP_WITH_ADJACENCY = 0x4,
			RenderPrimitiveType_t_RENDER_PRIM_MESH_SHADER = 0xc,
			RenderPrimitiveType_t_RENDER_PRIM_POINTS = 0x0,
			RenderPrimitiveType_t_RENDER_PRIM_TRIANGLES = 0x5,
			RenderPrimitiveType_t_RENDER_PRIM_TRIANGLES_WITH_ADJACENCY = 0x6,
			RenderPrimitiveType_t_RENDER_PRIM_TRIANGLE_STRIP = 0x7,
			RenderPrimitiveType_t_RENDER_PRIM_TRIANGLE_STRIP_WITH_ADJACENCY = 0x8,
			RenderPrimitiveType_t_RENDER_PRIM_TYPE_COUNT = 0xd
		};

enum modellib_ModelConfigAttachmentType_t : uint32_t {
			ModelConfigAttachmentType_t_MODEL_CONFIG_ATTACHMENT_BONEMERGE = 0x2,
			ModelConfigAttachmentType_t_MODEL_CONFIG_ATTACHMENT_BONE_OR_ATTACHMENT = 0x0,
			ModelConfigAttachmentType_t_MODEL_CONFIG_ATTACHMENT_COUNT = 0x3,
			ModelConfigAttachmentType_t_MODEL_CONFIG_ATTACHMENT_INVALID = 0xffffffff,
			ModelConfigAttachmentType_t_MODEL_CONFIG_ATTACHMENT_ROOT_RELATIVE = 0x1
		};

enum modellib_NPCPhysicsHullType_t : uint32_t {
			NPCPhysicsHullType_t_eCenteredCapsule = 0x2,
			NPCPhysicsHullType_t_eGenericCapsule = 0x3,
			NPCPhysicsHullType_t_eGroundBox = 0x4,
			NPCPhysicsHullType_t_eGroundCapsule = 0x1,
			NPCPhysicsHullType_t_eInvalid = 0x0
		};

enum modellib_ModelBoneFlexComponent_t : uint32_t {
			ModelBoneFlexComponent_t_MODEL_BONE_FLEX_INVALID = 0xffffffff,
			ModelBoneFlexComponent_t_MODEL_BONE_FLEX_TX = 0x0,
			ModelBoneFlexComponent_t_MODEL_BONE_FLEX_TY = 0x1,
			ModelBoneFlexComponent_t_MODEL_BONE_FLEX_TZ = 0x2
		};

enum modellib_RenderSlotType_t : uint8_t {
			RenderSlotType_t_RENDER_SLOT_INVALID = 0xff,
			RenderSlotType_t_RENDER_SLOT_PER_INSTANCE = 0x1,
			RenderSlotType_t_RENDER_SLOT_PER_VERTEX = 0x0
		};

enum animationsystem_AnimationProcessingType_t : uint32_t {
			AnimationProcessingType_t_ANIMATION_PROCESSING_CLIENT_INTERPOLATION = 0x3,
			AnimationProcessingType_t_ANIMATION_PROCESSING_CLIENT_PREDICTION = 0x2,
			AnimationProcessingType_t_ANIMATION_PROCESSING_CLIENT_RENDER = 0x4,
			AnimationProcessingType_t_ANIMATION_PROCESSING_CLIENT_SIMULATION = 0x1,
			AnimationProcessingType_t_ANIMATION_PROCESSING_MAX = 0x5,
			AnimationProcessingType_t_ANIMATION_PROCESSING_SERVER_SIMULATION = 0x0
		};

enum animationsystem_AnimationSnapshotType_t : uint32_t {
			AnimationSnapshotType_t_ANIMATION_SNAPSHOT_CLIENT_INTERPOLATION = 0x3,
			AnimationSnapshotType_t_ANIMATION_SNAPSHOT_CLIENT_PREDICTION = 0x2,
			AnimationSnapshotType_t_ANIMATION_SNAPSHOT_CLIENT_RENDER = 0x4,
			AnimationSnapshotType_t_ANIMATION_SNAPSHOT_CLIENT_SIMULATION = 0x1,
			AnimationSnapshotType_t_ANIMATION_SNAPSHOT_FINAL_COMPOSITE = 0x5,
			AnimationSnapshotType_t_ANIMATION_SNAPSHOT_MAX = 0x6,
			AnimationSnapshotType_t_ANIMATION_SNAPSHOT_SERVER_SIMULATION = 0x0
		};

enum animationsystem_MoodType_t : uint32_t {
			MoodType_t_eMoodType_Body = 0x1,
			MoodType_t_eMoodType_Head = 0x0
		};

enum soundsystem_voicecontainers_CVSoundFormat_t : uint8_t {
			CVSoundFormat_t_ADPCM = 0x3,
			CVSoundFormat_t_MP3 = 0x2,
			CVSoundFormat_t_PCM16 = 0x0,
			CVSoundFormat_t_PCM8 = 0x1
		};

enum soundsystem_voicecontainers_EMode_t : uint32_t {
			EMode_t_Peak = 0x0,
			EMode_t_RMS = 0x1
		};

enum soundsystem_voicecontainers_PlayBackMode_t : uint32_t {
			PlayBackMode_t_Random = 0x0,
			PlayBackMode_t_RandomAvoidLast = 0x2,
			PlayBackMode_t_RandomNoRepeats = 0x1,
			PlayBackMode_t_RandomWeights = 0x4,
			PlayBackMode_t_Sequential = 0x3
		};

enum soundsystem_voicecontainers_EWaveform : uint8_t {
			EWaveform_Noise = 0x4,
			EWaveform_Saw = 0x2,
			EWaveform_Sine = 0x0,
			EWaveform_Square = 0x1,
			EWaveform_Triangle = 0x3
		};

enum soundsystem_voicecontainers_EMidiNote : uint8_t {
			EMidiNote_A = 0x9,
			EMidiNote_A_Sharp = 0xa,
			EMidiNote_B = 0xb,
			EMidiNote_C = 0x0,
			EMidiNote_C_Sharp = 0x1,
			EMidiNote_Count = 0xc,
			EMidiNote_D = 0x2,
			EMidiNote_D_Sharp = 0x3,
			EMidiNote_E = 0x4,
			EMidiNote_F = 0x5,
			EMidiNote_F_Sharp = 0x6,
			EMidiNote_G = 0x7,
			EMidiNote_G_Sharp = 0x8
		};

enum pulse_runtime_lib_PulseBestOutflowRules_t : uint32_t {
			PulseBestOutflowRules_t_SORT_BY_NUMBER_OF_VALID_CRITERIA = 0x0,
			PulseBestOutflowRules_t_SORT_BY_OUTFLOW_INDEX = 0x1
		};

enum pulse_runtime_lib_PulseMethodCallMode_t : uint32_t {
			PulseMethodCallMode_t_ASYNC_FIRE_AND_FORGET = 0x1,
			PulseMethodCallMode_t_SYNC_WAIT_FOR_COMPLETION = 0x0
		};

enum pulse_runtime_lib_PulseCursorCancelPriority_t : uint32_t {
			PulseCursorCancelPriority_t_CancelOnSucceeded = 0x1,
			PulseCursorCancelPriority_t_HardCancel = 0x3,
			PulseCursorCancelPriority_t_None = 0x0,
			PulseCursorCancelPriority_t_SoftCancel = 0x2
		};

enum pulse_runtime_lib_PulseDomainValueType_t : uint32_t {
			PulseDomainValueType_t_COUNT = 0x2,
			PulseDomainValueType_t_ENTITY_NAME = 0x0,
			PulseDomainValueType_t_INVALID = 0xffffffff,
			PulseDomainValueType_t_PANEL_ID = 0x1
		};

enum pulse_runtime_lib_PulseVariableKeysSource_t : uint32_t {
			PulseVariableKeysSource_t_COUNT = 0x5,
			PulseVariableKeysSource_t_CPP = 0x1,
			PulseVariableKeysSource_t_PRIVATE = 0x0,
			PulseVariableKeysSource_t_VMAP = 0x2,
			PulseVariableKeysSource_t_VMDL = 0x3,
			PulseVariableKeysSource_t_XML = 0x4
		};

enum pulse_runtime_lib_PulseInstructionCode_t : uint16_t {
			PulseInstructionCode_t_ADD = 0x19,
			PulseInstructionCode_t_ADD_FLOAT = 0x32,
			PulseInstructionCode_t_ADD_FLOAT_GAMETIME = 0x3a,
			PulseInstructionCode_t_ADD_GAMETIME_FLOAT = 0x39,
			PulseInstructionCode_t_ADD_INT = 0x31,
			PulseInstructionCode_t_ADD_STRING = 0x33,
			PulseInstructionCode_t_ADD_VEC2 = 0x34,
			PulseInstructionCode_t_ADD_VEC3 = 0x35,
			PulseInstructionCode_t_ADD_VEC3WS_VEC3 = 0x36,
			PulseInstructionCode_t_ADD_VEC3_VEC3WS = 0x37,
			PulseInstructionCode_t_ADD_VEC4 = 0x38,
			PulseInstructionCode_t_AND = 0x22,
			PulseInstructionCode_t_CELL_INVOKE = 0xb,
			PulseInstructionCode_t_CHUNK_LEAP = 0x7,
			PulseInstructionCode_t_CHUNK_LEAP_COND = 0x8,
			PulseInstructionCode_t_CONVERT_VALUE = 0x27,
			PulseInstructionCode_t_COPY = 0x16,
			PulseInstructionCode_t_DETACH_REGISTER = 0x10,
			PulseInstructionCode_t_DIV = 0x1c,
			PulseInstructionCode_t_DIV_FLOAT = 0x46,
			PulseInstructionCode_t_ELEMENT_ACCESS = 0x26,
			PulseInstructionCode_t_ELEMENT_ACCESS_COLOR_RGB = 0x7b,
			PulseInstructionCode_t_ELEMENT_ACCESS_VEC2 = 0x77,
			PulseInstructionCode_t_ELEMENT_ACCESS_VEC3 = 0x78,
			PulseInstructionCode_t_ELEMENT_ACCESS_VEC3WS = 0x79,
			PulseInstructionCode_t_ELEMENT_ACCESS_VEC4 = 0x7a,
			PulseInstructionCode_t_EQ = 0x20,
			PulseInstructionCode_t_EQ_ARRAY = 0x5e,
			PulseInstructionCode_t_EQ_BOOL = 0x4f,
			PulseInstructionCode_t_EQ_COLOR_RGB = 0x5d,
			PulseInstructionCode_t_EQ_EHANDLE = 0x59,
			PulseInstructionCode_t_EQ_ENTITY_NAME = 0x57,
			PulseInstructionCode_t_EQ_FLOAT = 0x51,
			PulseInstructionCode_t_EQ_GAMETIME = 0x5f,
			PulseInstructionCode_t_EQ_INT = 0x50,
			PulseInstructionCode_t_EQ_OPAQUE_HANDLE = 0x5b,
			PulseInstructionCode_t_EQ_PANEL_HANDLE = 0x5a,
			PulseInstructionCode_t_EQ_SCHEMA_ENUM = 0x58,
			PulseInstructionCode_t_EQ_STRING = 0x56,
			PulseInstructionCode_t_EQ_TEST_HANDLE = 0x5c,
			PulseInstructionCode_t_EQ_VEC2 = 0x52,
			PulseInstructionCode_t_EQ_VEC3 = 0x53,
			PulseInstructionCode_t_EQ_VEC3WS = 0x54,
			PulseInstructionCode_t_EQ_VEC4 = 0x55,
			PulseInstructionCode_t_GET_ARRAY_ELEMENT = 0x14,
			PulseInstructionCode_t_GET_BLACKBOARD_REFERENCE = 0x29,
			PulseInstructionCode_t_GET_CONST = 0x13,
			PulseInstructionCode_t_GET_CONST_INLINE_STORAGE = 0x7c,
			PulseInstructionCode_t_GET_DOMAIN_VALUE = 0x15,
			PulseInstructionCode_t_GET_VAR = 0xe,
			PulseInstructionCode_t_GET_VAR_DETACH = 0xf,
			PulseInstructionCode_t_IMMEDIATE_HALT = 0x1,
			PulseInstructionCode_t_INVALID = 0x0,
			PulseInstructionCode_t_JUMP = 0x5,
			PulseInstructionCode_t_JUMP_COND = 0x6,
			PulseInstructionCode_t_LAST_SERIALIZED_CODE = 0x2b,
			PulseInstructionCode_t_LIBRARY_INVOKE = 0xc,
			PulseInstructionCode_t_LT = 0x1e,
			PulseInstructionCode_t_LTE = 0x1f,
			PulseInstructionCode_t_LTE_FLOAT = 0x4d,
			PulseInstructionCode_t_LTE_GAMETIME = 0x4e,
			PulseInstructionCode_t_LTE_INT = 0x4c,
			PulseInstructionCode_t_LT_FLOAT = 0x4a,
			PulseInstructionCode_t_LT_GAMETIME = 0x4b,
			PulseInstructionCode_t_LT_INT = 0x49,
			PulseInstructionCode_t_MOD = 0x1d,
			PulseInstructionCode_t_MOD_FLOAT = 0x48,
			PulseInstructionCode_t_MOD_INT = 0x47,
			PulseInstructionCode_t_MUL = 0x1b,
			PulseInstructionCode_t_MUL_FLOAT = 0x45,
			PulseInstructionCode_t_MUL_INT = 0x44,
			PulseInstructionCode_t_NE = 0x21,
			PulseInstructionCode_t_NEGATE = 0x18,
			PulseInstructionCode_t_NEGATE_FLOAT = 0x2d,
			PulseInstructionCode_t_NEGATE_INT = 0x2c,
			PulseInstructionCode_t_NEGATE_VEC2 = 0x2e,
			PulseInstructionCode_t_NEGATE_VEC3 = 0x2f,
			PulseInstructionCode_t_NEGATE_VEC4 = 0x30,
			PulseInstructionCode_t_NE_ARRAY = 0x6f,
			PulseInstructionCode_t_NE_BOOL = 0x60,
			PulseInstructionCode_t_NE_COLOR_RGB = 0x6e,
			PulseInstructionCode_t_NE_EHANDLE = 0x6a,
			PulseInstructionCode_t_NE_ENTITY_NAME = 0x68,
			PulseInstructionCode_t_NE_FLOAT = 0x62,
			PulseInstructionCode_t_NE_GAMETIME = 0x70,
			PulseInstructionCode_t_NE_INT = 0x61,
			PulseInstructionCode_t_NE_OPAQUE_HANDLE = 0x6c,
			PulseInstructionCode_t_NE_PANEL_HANDLE = 0x6b,
			PulseInstructionCode_t_NE_SCHEMA_ENUM = 0x69,
			PulseInstructionCode_t_NE_STRING = 0x67,
			PulseInstructionCode_t_NE_TEST_HANDLE = 0x6d,
			PulseInstructionCode_t_NE_VEC2 = 0x63,
			PulseInstructionCode_t_NE_VEC3 = 0x64,
			PulseInstructionCode_t_NE_VEC3WS = 0x65,
			PulseInstructionCode_t_NE_VEC4 = 0x66,
			PulseInstructionCode_t_NOP = 0x4,
			PulseInstructionCode_t_NOT = 0x17,
			PulseInstructionCode_t_OR = 0x23,
			PulseInstructionCode_t_PULSE_CALL_ASYNC_FIRE = 0xa,
			PulseInstructionCode_t_PULSE_CALL_SYNC = 0x9,
			PulseInstructionCode_t_REINTERPRET_INSTANCE = 0x28,
			PulseInstructionCode_t_RETURN_VALUE = 0x3,
			PulseInstructionCode_t_RETURN_VOID = 0x2,
			PulseInstructionCode_t_SCALE = 0x24,
			PulseInstructionCode_t_SCALE_INV = 0x25,
			PulseInstructionCode_t_SCALE_INV_VEC2 = 0x75,
			PulseInstructionCode_t_SCALE_INV_VEC3 = 0x74,
			PulseInstructionCode_t_SCALE_INV_VEC4 = 0x76,
			PulseInstructionCode_t_SCALE_VEC2 = 0x72,
			PulseInstructionCode_t_SCALE_VEC3 = 0x71,
			PulseInstructionCode_t_SCALE_VEC4 = 0x73,
			PulseInstructionCode_t_SET_BLACKBOARD_REFERENCE = 0x2a,
			PulseInstructionCode_t_SET_VAR = 0xd,
			PulseInstructionCode_t_SET_VAR_ARRAY_ELEMENT_1D = 0x11,
			PulseInstructionCode_t_SET_VAR_OBSERVABLE = 0x12,
			PulseInstructionCode_t_SUB = 0x1a,
			PulseInstructionCode_t_SUB_FLOAT = 0x3c,
			PulseInstructionCode_t_SUB_GAMETIME = 0x43,
			PulseInstructionCode_t_SUB_GAMETIME_FLOAT = 0x42,
			PulseInstructionCode_t_SUB_INT = 0x3b,
			PulseInstructionCode_t_SUB_VEC2 = 0x3d,
			PulseInstructionCode_t_SUB_VEC3 = 0x3e,
			PulseInstructionCode_t_SUB_VEC3WS_VEC3 = 0x3f,
			PulseInstructionCode_t_SUB_VEC3WS_VEC3WS = 0x40,
			PulseInstructionCode_t_SUB_VEC4 = 0x41
		};

enum soundsystem_SosActionStopType_t : uint32_t {
			SosActionStopType_t_SOS_STOPTYPE_NONE = 0x0,
			SosActionStopType_t_SOS_STOPTYPE_OPVAR = 0x2,
			SosActionStopType_t_SOS_STOPTYPE_TIME = 0x1
		};

enum soundsystem_SosActionLimitSortType_t : uint32_t {
			SosActionLimitSortType_t_SOS_LIMIT_SORTTYPE_HIGHEST = 0x0,
			SosActionLimitSortType_t_SOS_LIMIT_SORTTYPE_LOWEST = 0x1
		};

enum soundsystem_SosActionSetParamSortType_t : uint32_t {
			SosActionSetParamSortType_t_SOS_SETPARAM_SORTTYPE_HIGHEST = 0x0,
			SosActionSetParamSortType_t_SOS_SETPARAM_SORTTYPE_LOWEST = 0x1
		};

enum soundsystem_SosGroupType_t : uint32_t {
			SosGroupType_t_SOS_GROUPTYPE_DYNAMIC = 0x0,
			SosGroupType_t_SOS_GROUPTYPE_STATIC = 0x1
		};

enum soundsystem_SosGroupFieldBehavior_t : uint32_t {
			SosGroupFieldBehavior_t_kBranch = 0x1,
			SosGroupFieldBehavior_t_kIgnore = 0x0,
			SosGroupFieldBehavior_t_kMatch = 0x2
		};

enum soundsystem_SosEditItemType_t : uint32_t {
			SosEditItemType_t_SOS_EDIT_ITEM_TYPE_FIELD = 0x5,
			SosEditItemType_t_SOS_EDIT_ITEM_TYPE_LIBRARYSTACKS = 0x2,
			SosEditItemType_t_SOS_EDIT_ITEM_TYPE_OPERATOR = 0x4,
			SosEditItemType_t_SOS_EDIT_ITEM_TYPE_SOUNDEVENT = 0x1,
			SosEditItemType_t_SOS_EDIT_ITEM_TYPE_SOUNDEVENTS = 0x0,
			SosEditItemType_t_SOS_EDIT_ITEM_TYPE_STACK = 0x3
		};

enum client_EDestructiblePartDamagePassThroughType : uint32_t {
			EDestructiblePartDamagePassThroughType_Absorb = 0x1,
			EDestructiblePartDamagePassThroughType_InvincibleAbsorb = 0x2,
			EDestructiblePartDamagePassThroughType_InvinciblePassthrough = 0x3,
			EDestructiblePartDamagePassThroughType_Normal = 0x0
		};

enum client_DestructiblePartDestructionDeathBehavior_t : uint32_t {
			DestructiblePartDestructionDeathBehavior_t_eDoNotKill = 0x0,
			DestructiblePartDestructionDeathBehavior_t_eGib = 0x2,
			DestructiblePartDestructionDeathBehavior_t_eKill = 0x1,
			DestructiblePartDestructionDeathBehavior_t_eRemove = 0x3
		};

enum client_HitGroup_t : uint32_t {
			HitGroup_t_HITGROUP_CHEST = 0x2,
			HitGroup_t_HITGROUP_COUNT = 0xc,
			HitGroup_t_HITGROUP_GEAR = 0xa,
			HitGroup_t_HITGROUP_GENERIC = 0x0,
			HitGroup_t_HITGROUP_HEAD = 0x1,
			HitGroup_t_HITGROUP_INVALID = 0xffffffff,
			HitGroup_t_HITGROUP_LEFTARM = 0x4,
			HitGroup_t_HITGROUP_LEFTLEG = 0x6,
			HitGroup_t_HITGROUP_NECK = 0x8,
			HitGroup_t_HITGROUP_RIGHTARM = 0x5,
			HitGroup_t_HITGROUP_RIGHTLEG = 0x7,
			HitGroup_t_HITGROUP_SPECIAL = 0xb,
			HitGroup_t_HITGROUP_STOMACH = 0x3,
			HitGroup_t_HITGROUP_UNUSED = 0x9
		};

enum client_AmmoFlags_t : uint32_t {
			AmmoFlags_t_AMMO_FLAG_MAX = 0x2,
			AmmoFlags_t_AMMO_FORCE_DROP_IF_CARRIED = 0x1,
			AmmoFlags_t_AMMO_RESERVE_STAYS_WITH_WEAPON = 0x2
		};

enum client_attributeprovidertypes_t : uint32_t {
			attributeprovidertypes_t_PROVIDER_GENERIC = 0x0,
			attributeprovidertypes_t_PROVIDER_WEAPON = 0x1
		};

enum client_RenderMode_t : uint8_t {
			RenderMode_t_kRenderDevVisualizer = 0xb,
			RenderMode_t_kRenderEnvironmental = 0x6,
			RenderMode_t_kRenderGlow = 0x3,
			RenderMode_t_kRenderModeCount = 0xc,
			RenderMode_t_kRenderNone = 0xa,
			RenderMode_t_kRenderNormal = 0x0,
			RenderMode_t_kRenderTransAdd = 0x5,
			RenderMode_t_kRenderTransAddFrameBlend = 0x7,
			RenderMode_t_kRenderTransAlpha = 0x4,
			RenderMode_t_kRenderTransAlphaAdd = 0x8,
			RenderMode_t_kRenderTransColor = 0x1,
			RenderMode_t_kRenderTransTexture = 0x2,
			RenderMode_t_kRenderWorldGlow = 0x9
		};

enum client_RenderFx_t : uint8_t {
			RenderFx_t_kRenderFxFadeFast = 0x6,
			RenderFx_t_kRenderFxFadeIn = 0x10,
			RenderFx_t_kRenderFxFadeOut = 0xf,
			RenderFx_t_kRenderFxFadeSlow = 0x5,
			RenderFx_t_kRenderFxFlickerFast = 0xd,
			RenderFx_t_kRenderFxFlickerSlow = 0xc,
			RenderFx_t_kRenderFxGlowShell = 0x12,
			RenderFx_t_kRenderFxMax = 0x13,
			RenderFx_t_kRenderFxNoDissipation = 0xe,
			RenderFx_t_kRenderFxNone = 0x0,
			RenderFx_t_kRenderFxPulseFast = 0x2,
			RenderFx_t_kRenderFxPulseFastWide = 0x4,
			RenderFx_t_kRenderFxPulseFastWider = 0x11,
			RenderFx_t_kRenderFxPulseSlow = 0x1,
			RenderFx_t_kRenderFxPulseSlowWide = 0x3,
			RenderFx_t_kRenderFxSolidFast = 0x8,
			RenderFx_t_kRenderFxSolidSlow = 0x7,
			RenderFx_t_kRenderFxStrobeFast = 0xa,
			RenderFx_t_kRenderFxStrobeFaster = 0xb,
			RenderFx_t_kRenderFxStrobeSlow = 0x9
		};

enum client_DecalMode_t : uint8_t {
			DecalMode_t_kDecalBlood = 0x0,
			DecalMode_t_kDecalCloak = 0x1,
			DecalMode_t_kDecalCloakDamage = 0x2,
			DecalMode_t_kDecalDefault = 0x0,
			DecalMode_t_kDecalInvalid = 0xff,
			DecalMode_t_kDecalMax = 0x3
		};

enum client_SolidType_t : uint8_t {
			SolidType_t_SOLID_BBOX = 0x2,
			SolidType_t_SOLID_BSP = 0x1,
			SolidType_t_SOLID_CAPSULE = 0x7,
			SolidType_t_SOLID_LAST = 0x8,
			SolidType_t_SOLID_NONE = 0x0,
			SolidType_t_SOLID_OBB = 0x3,
			SolidType_t_SOLID_POINT = 0x5,
			SolidType_t_SOLID_SPHERE = 0x4,
			SolidType_t_SOLID_VPHYSICS = 0x6
		};

enum client_SurroundingBoundsType_t : uint8_t {
			SurroundingBoundsType_t_SURROUNDING_TYPE_BIT_COUNT = 0x3,
			SurroundingBoundsType_t_USE_BEST_COLLISION_BOUNDS = 0x1,
			SurroundingBoundsType_t_USE_COLLISION_BOUNDS_NEVER_VPHYSICS = 0x7,
			SurroundingBoundsType_t_USE_GAME_CODE = 0x4,
			SurroundingBoundsType_t_USE_HITBOXES = 0x2,
			SurroundingBoundsType_t_USE_OBB_COLLISION_BOUNDS = 0x0,
			SurroundingBoundsType_t_USE_ROTATION_EXPANDED_BOUNDS = 0x5,
			SurroundingBoundsType_t_USE_ROTATION_EXPANDED_ORIENTED_BOUNDS = 0x6,
			SurroundingBoundsType_t_USE_ROTATION_EXPANDED_SEQUENCE_BOUNDS = 0x8,
			SurroundingBoundsType_t_USE_SPECIFIED_BOUNDS = 0x3
		};

enum client_TakeDamageFlags_t : uint64_t {
			TakeDamageFlags_t_DFLAG_ALWAYS_FIRE_DAMAGE_EVENTS = 0x200,
			TakeDamageFlags_t_DFLAG_ALWAYS_GIB = 0x20,
			TakeDamageFlags_t_DFLAG_FORCEREDUCEARMOR_DMG = 0x800,
			TakeDamageFlags_t_DFLAG_FORCE_DEATH = 0x10,
			TakeDamageFlags_t_DFLAG_FORCE_PHYSICS_FORCE = 0x8000,
			TakeDamageFlags_t_DFLAG_IGNORE_ARMOR = 0x10000,
			TakeDamageFlags_t_DFLAG_IGNORE_DESTRUCTIBLE_PARTS = 0x2000,
			TakeDamageFlags_t_DFLAG_NEVER_GIB = 0x40,
			TakeDamageFlags_t_DFLAG_NONE = 0x0,
			TakeDamageFlags_t_DFLAG_PREVENT_DEATH = 0x8,
			TakeDamageFlags_t_DFLAG_RADIUS_DMG = 0x400,
			TakeDamageFlags_t_DFLAG_REMOVE_NO_RAGDOLL = 0x80,
			TakeDamageFlags_t_DFLAG_SUPPRESS_BREAKABLES = 0x4000,
			TakeDamageFlags_t_DFLAG_SUPPRESS_DAMAGE_MODIFICATION = 0x100,
			TakeDamageFlags_t_DFLAG_SUPPRESS_EFFECTS = 0x4,
			TakeDamageFlags_t_DFLAG_SUPPRESS_HEALTH_CHANGES = 0x1,
			TakeDamageFlags_t_DFLAG_SUPPRESS_INTERRUPT_FLINCH = 0x1000,
			TakeDamageFlags_t_DFLAG_SUPPRESS_PHYSICS_FORCE = 0x2,
			TakeDamageFlags_t_DFLAG_SUPPRESS_UTILREMOVE = 0x20000,
			TakeDamageFlags_t_DMG_LASTDFLAG = 0x8000
		};

enum client_EntityPlatformTypes_t : uint8_t {
			EntityPlatformTypes_t_ENTITY_NOT_PLATFORM = 0x0,
			EntityPlatformTypes_t_ENTITY_PLATFORM_PLAYER_FOLLOWS_YAW = 0x1,
			EntityPlatformTypes_t_ENTITY_PLATFORM_PLAYER_IGNORES_YAW = 0x2
		};

enum client_MoveCollide_t : uint8_t {
			MoveCollide_t_MOVECOLLIDE_COUNT = 0x4,
			MoveCollide_t_MOVECOLLIDE_DEFAULT = 0x0,
			MoveCollide_t_MOVECOLLIDE_FLY_BOUNCE = 0x1,
			MoveCollide_t_MOVECOLLIDE_FLY_CUSTOM = 0x2,
			MoveCollide_t_MOVECOLLIDE_FLY_SLIDE = 0x3,
			MoveCollide_t_MOVECOLLIDE_MAX_BITS = 0x3
		};

enum client_MoveType_t : uint8_t {
			MoveType_t_MOVETYPE_CUSTOM = 0xa,
			MoveType_t_MOVETYPE_FLY = 0x3,
			MoveType_t_MOVETYPE_FLYGRAVITY = 0x4,
			MoveType_t_MOVETYPE_INVALID = 0xb,
			MoveType_t_MOVETYPE_LADDER = 0x9,
			MoveType_t_MOVETYPE_LAST = 0xb,
			MoveType_t_MOVETYPE_MAX_BITS = 0x5,
			MoveType_t_MOVETYPE_NOCLIP = 0x7,
			MoveType_t_MOVETYPE_NONE = 0x0,
			MoveType_t_MOVETYPE_OBSERVER = 0x8,
			MoveType_t_MOVETYPE_OBSOLETE = 0x1,
			MoveType_t_MOVETYPE_PUSH = 0x6,
			MoveType_t_MOVETYPE_VPHYSICS = 0x5,
			MoveType_t_MOVETYPE_WALK = 0x2
		};

enum client_BloodType : uint32_t {
			BloodType_ColorGreen = 0x2,
			BloodType_ColorRed = 0x0,
			BloodType_ColorRedLVL2 = 0x3,
			BloodType_ColorRedLVL3 = 0x4,
			BloodType_ColorRedLVL4 = 0x5,
			BloodType_ColorRedLVL5 = 0x6,
			BloodType_ColorRedLVL6 = 0x7,
			BloodType_ColorYellow = 0x1,
			BloodType_None = 0xffffffff
		};

enum client_AnimLoopMode_t : uint32_t {
			AnimLoopMode_t_ANIM_LOOP_MODE_COUNT = 0x3,
			AnimLoopMode_t_ANIM_LOOP_MODE_INVALID = 0xffffffff,
			AnimLoopMode_t_ANIM_LOOP_MODE_LOOPING = 0x1,
			AnimLoopMode_t_ANIM_LOOP_MODE_NOT_LOOPING = 0x0,
			AnimLoopMode_t_ANIM_LOOP_MODE_USE_SEQUENCE_SETTINGS = 0x2
		};

enum client_SequenceFinishNotifyState_t : uint8_t {
			SequenceFinishNotifyState_t_eDoNotNotify = 0x0,
			SequenceFinishNotifyState_t_eNotifyTriggered = 0x2,
			SequenceFinishNotifyState_t_eNotifyWhenFinished = 0x1
		};

enum client_PlayerConnectedState : uint32_t {
			PlayerConnectedState_PlayerConnected = 0x0,
			PlayerConnectedState_PlayerConnecting = 0x1,
			PlayerConnectedState_PlayerDisconnected = 0x4,
			PlayerConnectedState_PlayerDisconnecting = 0x3,
			PlayerConnectedState_PlayerNeverConnected = 0xffffffff,
			PlayerConnectedState_PlayerReconnecting = 0x2,
			PlayerConnectedState_PlayerReserved = 0x5
		};

enum client_ItemFlagTypes_t : uint8_t {
			ItemFlagTypes_t_ITEM_FLAG_CAN_SELECT_WITHOUT_AMMO = 0x1,
			ItemFlagTypes_t_ITEM_FLAG_DOHITLOCATIONDMG = 0x20,
			ItemFlagTypes_t_ITEM_FLAG_EXHAUSTIBLE = 0x10,
			ItemFlagTypes_t_ITEM_FLAG_LIMITINWORLD = 0x8,
			ItemFlagTypes_t_ITEM_FLAG_NOAMMOPICKUPS = 0x40,
			ItemFlagTypes_t_ITEM_FLAG_NOAUTORELOAD = 0x2,
			ItemFlagTypes_t_ITEM_FLAG_NOAUTOSWITCHEMPTY = 0x4,
			ItemFlagTypes_t_ITEM_FLAG_NOITEMPICKUP = 0x80,
			ItemFlagTypes_t_ITEM_FLAG_NONE = 0x0
		};

enum client_RumbleEffect_t : uint32_t {
			RumbleEffect_t_NUM_RUMBLE_EFFECTS = 0x19,
			RumbleEffect_t_RUMBLE_357 = 0x2,
			RumbleEffect_t_RUMBLE_AIRBOAT_GUN = 0xa,
			RumbleEffect_t_RUMBLE_AR2 = 0x4,
			RumbleEffect_t_RUMBLE_AR2_ALT_FIRE = 0x7,
			RumbleEffect_t_RUMBLE_CROWBAR_SWING = 0x9,
			RumbleEffect_t_RUMBLE_DMG_HIGH = 0x11,
			RumbleEffect_t_RUMBLE_DMG_LOW = 0xf,
			RumbleEffect_t_RUMBLE_DMG_MED = 0x10,
			RumbleEffect_t_RUMBLE_FALL_LONG = 0x12,
			RumbleEffect_t_RUMBLE_FALL_SHORT = 0x13,
			RumbleEffect_t_RUMBLE_FLAT_BOTH = 0xe,
			RumbleEffect_t_RUMBLE_FLAT_LEFT = 0xc,
			RumbleEffect_t_RUMBLE_FLAT_RIGHT = 0xd,
			RumbleEffect_t_RUMBLE_INVALID = 0xffffffff,
			RumbleEffect_t_RUMBLE_JEEP_ENGINE_LOOP = 0xb,
			RumbleEffect_t_RUMBLE_PHYSCANNON_HIGH = 0x18,
			RumbleEffect_t_RUMBLE_PHYSCANNON_LOW = 0x16,
			RumbleEffect_t_RUMBLE_PHYSCANNON_MEDIUM = 0x17,
			RumbleEffect_t_RUMBLE_PHYSCANNON_OPEN = 0x14,
			RumbleEffect_t_RUMBLE_PHYSCANNON_PUNT = 0x15,
			RumbleEffect_t_RUMBLE_PISTOL = 0x1,
			RumbleEffect_t_RUMBLE_RPG_MISSILE = 0x8,
			RumbleEffect_t_RUMBLE_SHOTGUN_DOUBLE = 0x6,
			RumbleEffect_t_RUMBLE_SHOTGUN_SINGLE = 0x5,
			RumbleEffect_t_RUMBLE_SMG1 = 0x3,
			RumbleEffect_t_RUMBLE_STOP_ALL = 0x0
		};

enum client_ObserverInterpState_t : uint32_t {
			ObserverInterpState_t_OBSERVER_INTERP_NONE = 0x0,
			ObserverInterpState_t_OBSERVER_INTERP_SETTLING = 0x3,
			ObserverInterpState_t_OBSERVER_INTERP_STARTING = 0x1,
			ObserverInterpState_t_OBSERVER_INTERP_TRAVELING = 0x2
		};

enum client_ObserverMode_t : uint32_t {
			ObserverMode_t_NUM_OBSERVER_MODES = 0x5,
			ObserverMode_t_OBS_MODE_CHASE = 0x3,
			ObserverMode_t_OBS_MODE_FIXED = 0x1,
			ObserverMode_t_OBS_MODE_IN_EYE = 0x2,
			ObserverMode_t_OBS_MODE_NONE = 0x0,
			ObserverMode_t_OBS_MODE_ROAMING = 0x4
		};

enum client_Reason : uint32_t {
			Reason_QUEST_NONINITIALIZED = 0x0,
			Reason_QUEST_NONOFFICIAL_SERVER = 0x5,
			Reason_QUEST_NOT_CONNECTED_TO_STEAM = 0x4,
			Reason_QUEST_NOT_ENOUGH_PLAYERS = 0x2,
			Reason_QUEST_NOT_SYNCED_WITH_SERVER = 0xb,
			Reason_QUEST_NO_ENTITLEMENT = 0x6,
			Reason_QUEST_NO_QUEST = 0x7,
			Reason_QUEST_OK = 0x1,
			Reason_QUEST_PLAYER_IS_BOT = 0x8,
			Reason_QUEST_REASON_MAX = 0xc,
			Reason_QUEST_WARMUP = 0x3,
			Reason_QUEST_WRONG_MAP = 0x9,
			Reason_QUEST_WRONG_MODE = 0xa
		};

enum client_MedalRank_t : uint32_t {
			MedalRank_t_MEDAL_RANK_BRONZE = 0x1,
			MedalRank_t_MEDAL_RANK_COUNT = 0x4,
			MedalRank_t_MEDAL_RANK_GOLD = 0x3,
			MedalRank_t_MEDAL_RANK_NONE = 0x0,
			MedalRank_t_MEDAL_RANK_SILVER = 0x2
		};

enum client_CSWeaponType : uint32_t {
			CSWeaponType_WEAPONTYPE_C4 = 0x7,
			CSWeaponType_WEAPONTYPE_EQUIPMENT = 0xa,
			CSWeaponType_WEAPONTYPE_GRENADE = 0x9,
			CSWeaponType_WEAPONTYPE_KNIFE = 0x0,
			CSWeaponType_WEAPONTYPE_MACHINEGUN = 0x6,
			CSWeaponType_WEAPONTYPE_PISTOL = 0x1,
			CSWeaponType_WEAPONTYPE_RIFLE = 0x3,
			CSWeaponType_WEAPONTYPE_SHOTGUN = 0x4,
			CSWeaponType_WEAPONTYPE_SNIPER_RIFLE = 0x5,
			CSWeaponType_WEAPONTYPE_STACKABLEITEM = 0xb,
			CSWeaponType_WEAPONTYPE_SUBMACHINEGUN = 0x2,
			CSWeaponType_WEAPONTYPE_TASER = 0x8,
			CSWeaponType_WEAPONTYPE_UNKNOWN = 0xc
		};

enum client_CSWeaponCategory : uint32_t {
			CSWeaponCategory_WEAPONCATEGORY_COUNT = 0x6,
			CSWeaponCategory_WEAPONCATEGORY_HEAVY = 0x5,
			CSWeaponCategory_WEAPONCATEGORY_MELEE = 0x1,
			CSWeaponCategory_WEAPONCATEGORY_OTHER = 0x0,
			CSWeaponCategory_WEAPONCATEGORY_RIFLE = 0x4,
			CSWeaponCategory_WEAPONCATEGORY_SECONDARY = 0x2,
			CSWeaponCategory_WEAPONCATEGORY_SMG = 0x3
		};

enum client_gear_slot_t : uint32_t {
			gear_slot_t_GEAR_SLOT_BOOSTS = 0xb,
			gear_slot_t_GEAR_SLOT_C4 = 0x4,
			gear_slot_t_GEAR_SLOT_COUNT = 0xd,
			gear_slot_t_GEAR_SLOT_FIRST = 0x0,
			gear_slot_t_GEAR_SLOT_GRENADES = 0x3,
			gear_slot_t_GEAR_SLOT_INVALID = 0xffffffff,
			gear_slot_t_GEAR_SLOT_KNIFE = 0x2,
			gear_slot_t_GEAR_SLOT_LAST = 0xc,
			gear_slot_t_GEAR_SLOT_PISTOL = 0x1,
			gear_slot_t_GEAR_SLOT_RESERVED_SLOT10 = 0x9,
			gear_slot_t_GEAR_SLOT_RESERVED_SLOT11 = 0xa,
			gear_slot_t_GEAR_SLOT_RESERVED_SLOT6 = 0x5,
			gear_slot_t_GEAR_SLOT_RESERVED_SLOT7 = 0x6,
			gear_slot_t_GEAR_SLOT_RESERVED_SLOT8 = 0x7,
			gear_slot_t_GEAR_SLOT_RESERVED_SLOT9 = 0x8,
			gear_slot_t_GEAR_SLOT_RIFLE = 0x0,
			gear_slot_t_GEAR_SLOT_UTILITY = 0xc
		};

enum client_loadout_slot_t : uint32_t {
			loadout_slot_t_LOADOUT_SLOT_C4 = 0x1,
			loadout_slot_t_LOADOUT_SLOT_CLOTHING_APPEARANCE = 0x2e,
			loadout_slot_t_LOADOUT_SLOT_CLOTHING_CUSTOMHEAD = 0x27,
			loadout_slot_t_LOADOUT_SLOT_CLOTHING_CUSTOMPLAYER = 0x26,
			loadout_slot_t_LOADOUT_SLOT_CLOTHING_EYEWEAR = 0x2a,
			loadout_slot_t_LOADOUT_SLOT_CLOTHING_FACEMASK = 0x28,
			loadout_slot_t_LOADOUT_SLOT_CLOTHING_HANDS = 0x29,
			loadout_slot_t_LOADOUT_SLOT_CLOTHING_HAT = 0x2b,
			loadout_slot_t_LOADOUT_SLOT_CLOTHING_LOWERBODY = 0x2c,
			loadout_slot_t_LOADOUT_SLOT_CLOTHING_TORSO = 0x2d,
			loadout_slot_t_LOADOUT_SLOT_COUNT = 0x39,
			loadout_slot_t_LOADOUT_SLOT_EQUIPMENT0 = 0x20,
			loadout_slot_t_LOADOUT_SLOT_EQUIPMENT1 = 0x21,
			loadout_slot_t_LOADOUT_SLOT_EQUIPMENT2 = 0x22,
			loadout_slot_t_LOADOUT_SLOT_EQUIPMENT3 = 0x23,
			loadout_slot_t_LOADOUT_SLOT_EQUIPMENT4 = 0x24,
			loadout_slot_t_LOADOUT_SLOT_EQUIPMENT5 = 0x25,
			loadout_slot_t_LOADOUT_SLOT_FIRST_ALL_CHARACTER = 0x36,
			loadout_slot_t_LOADOUT_SLOT_FIRST_AUTO_BUY_WEAPON = 0x0,
			loadout_slot_t_LOADOUT_SLOT_FIRST_COSMETIC = 0x29,
			loadout_slot_t_LOADOUT_SLOT_FIRST_PRIMARY_WEAPON = 0x8,
			loadout_slot_t_LOADOUT_SLOT_FIRST_WHEEL_EQUIPMENT = 0x20,
			loadout_slot_t_LOADOUT_SLOT_FIRST_WHEEL_GRENADE = 0x1a,
			loadout_slot_t_LOADOUT_SLOT_FIRST_WHEEL_WEAPON = 0x2,
			loadout_slot_t_LOADOUT_SLOT_FLAIR0 = 0x37,
			loadout_slot_t_LOADOUT_SLOT_GRENADE0 = 0x1a,
			loadout_slot_t_LOADOUT_SLOT_GRENADE1 = 0x1b,
			loadout_slot_t_LOADOUT_SLOT_GRENADE2 = 0x1c,
			loadout_slot_t_LOADOUT_SLOT_GRENADE3 = 0x1d,
			loadout_slot_t_LOADOUT_SLOT_GRENADE4 = 0x1e,
			loadout_slot_t_LOADOUT_SLOT_GRENADE5 = 0x1f,
			loadout_slot_t_LOADOUT_SLOT_HEAVY0 = 0x14,
			loadout_slot_t_LOADOUT_SLOT_HEAVY1 = 0x15,
			loadout_slot_t_LOADOUT_SLOT_HEAVY2 = 0x16,
			loadout_slot_t_LOADOUT_SLOT_HEAVY3 = 0x17,
			loadout_slot_t_LOADOUT_SLOT_HEAVY4 = 0x18,
			loadout_slot_t_LOADOUT_SLOT_HEAVY5 = 0x19,
			loadout_slot_t_LOADOUT_SLOT_INVALID = 0xffffffff,
			loadout_slot_t_LOADOUT_SLOT_LAST_ALL_CHARACTER = 0x38,
			loadout_slot_t_LOADOUT_SLOT_LAST_AUTO_BUY_WEAPON = 0x1,
			loadout_slot_t_LOADOUT_SLOT_LAST_COSMETIC = 0x29,
			loadout_slot_t_LOADOUT_SLOT_LAST_PRIMARY_WEAPON = 0x19,
			loadout_slot_t_LOADOUT_SLOT_LAST_WHEEL_EQUIPMENT = 0x25,
			loadout_slot_t_LOADOUT_SLOT_LAST_WHEEL_GRENADE = 0x1f,
			loadout_slot_t_LOADOUT_SLOT_LAST_WHEEL_WEAPON = 0x19,
			loadout_slot_t_LOADOUT_SLOT_MELEE = 0x0,
			loadout_slot_t_LOADOUT_SLOT_MISC0 = 0x2f,
			loadout_slot_t_LOADOUT_SLOT_MISC1 = 0x30,
			loadout_slot_t_LOADOUT_SLOT_MISC2 = 0x31,
			loadout_slot_t_LOADOUT_SLOT_MISC3 = 0x32,
			loadout_slot_t_LOADOUT_SLOT_MISC4 = 0x33,
			loadout_slot_t_LOADOUT_SLOT_MISC5 = 0x34,
			loadout_slot_t_LOADOUT_SLOT_MISC6 = 0x35,
			loadout_slot_t_LOADOUT_SLOT_MUSICKIT = 0x36,
			loadout_slot_t_LOADOUT_SLOT_PROMOTED = 0xfffffffe,
			loadout_slot_t_LOADOUT_SLOT_RIFLE0 = 0xe,
			loadout_slot_t_LOADOUT_SLOT_RIFLE1 = 0xf,
			loadout_slot_t_LOADOUT_SLOT_RIFLE2 = 0x10,
			loadout_slot_t_LOADOUT_SLOT_RIFLE3 = 0x11,
			loadout_slot_t_LOADOUT_SLOT_RIFLE4 = 0x12,
			loadout_slot_t_LOADOUT_SLOT_RIFLE5 = 0x13,
			loadout_slot_t_LOADOUT_SLOT_SECONDARY0 = 0x2,
			loadout_slot_t_LOADOUT_SLOT_SECONDARY1 = 0x3,
			loadout_slot_t_LOADOUT_SLOT_SECONDARY2 = 0x4,
			loadout_slot_t_LOADOUT_SLOT_SECONDARY3 = 0x5,
			loadout_slot_t_LOADOUT_SLOT_SECONDARY4 = 0x6,
			loadout_slot_t_LOADOUT_SLOT_SECONDARY5 = 0x7,
			loadout_slot_t_LOADOUT_SLOT_SMG0 = 0x8,
			loadout_slot_t_LOADOUT_SLOT_SMG1 = 0x9,
			loadout_slot_t_LOADOUT_SLOT_SMG2 = 0xa,
			loadout_slot_t_LOADOUT_SLOT_SMG3 = 0xb,
			loadout_slot_t_LOADOUT_SLOT_SMG4 = 0xc,
			loadout_slot_t_LOADOUT_SLOT_SMG5 = 0xd,
			loadout_slot_t_LOADOUT_SLOT_SPRAY0 = 0x38
		};

enum client_CSWeaponSilencerType : uint32_t {
			CSWeaponSilencerType_WEAPONSILENCER_DETACHABLE = 0x1,
			CSWeaponSilencerType_WEAPONSILENCER_INTEGRATED = 0x2,
			CSWeaponSilencerType_WEAPONSILENCER_NONE = 0x0
		};

enum client_EKillTypes_t : uint8_t {
			EKillTypes_t_KILLTYPE_COUNT = 0x7,
			EKillTypes_t_KILL_BLAST = 0x3,
			EKillTypes_t_KILL_BURN = 0x4,
			EKillTypes_t_KILL_DEFAULT = 0x1,
			EKillTypes_t_KILL_HEADSHOT = 0x2,
			EKillTypes_t_KILL_NONE = 0x0,
			EKillTypes_t_KILL_SHOCK = 0x6,
			EKillTypes_t_KILL_SLASH = 0x5
		};

enum client_DecalFlags_t : uint32_t {
			DecalFlags_t_eAll = 0xffffffff,
			DecalFlags_t_eAllButCannotClear = 0xfffffffe,
			DecalFlags_t_eCannotClear = 0x1,
			DecalFlags_t_eNone = 0x0
		};

enum client_filter_t : uint32_t {
			filter_t_FILTER_AND = 0x0,
			filter_t_FILTER_OR = 0x1
		};

enum client_GrenadeType_t : uint32_t {
			GrenadeType_t_GRENADE_TYPE_DECOY = 0x3,
			GrenadeType_t_GRENADE_TYPE_EXPLOSIVE = 0x0,
			GrenadeType_t_GRENADE_TYPE_FIRE = 0x2,
			GrenadeType_t_GRENADE_TYPE_FLASH = 0x1,
			GrenadeType_t_GRENADE_TYPE_SMOKE = 0x4,
			GrenadeType_t_GRENADE_TYPE_TOTAL = 0x5
		};

enum client_InventoryNodeType_t : uint32_t {
			InventoryNodeType_t_CONCRETE_NODE_SCHEMA_ITEMDEF = 0x6,
			InventoryNodeType_t_CONCRETE_NODE_SCHEMA_KEYCHAIN = 0x8,
			InventoryNodeType_t_CONCRETE_NODE_SCHEMA_PREFAB = 0x5,
			InventoryNodeType_t_CONCRETE_NODE_SCHEMA_STICKER = 0x7,
			InventoryNodeType_t_NODE_TYPE_INVALID = 0x0,
			InventoryNodeType_t_VIRTUAL_NODE_SCHEMA_ITEMDEF = 0x2,
			InventoryNodeType_t_VIRTUAL_NODE_SCHEMA_KEYCHAIN = 0x4,
			InventoryNodeType_t_VIRTUAL_NODE_SCHEMA_PREFAB = 0x1,
			InventoryNodeType_t_VIRTUAL_NODE_SCHEMA_STICKER = 0x3
		};

enum client_PointOrientGoalDirectionType_t : uint32_t {
			PointOrientGoalDirectionType_t_eAbsOrigin = 0x0,
			PointOrientGoalDirectionType_t_eCenter = 0x1,
			PointOrientGoalDirectionType_t_eEyesForward = 0x4,
			PointOrientGoalDirectionType_t_eForward = 0x3,
			PointOrientGoalDirectionType_t_eHead = 0x2
		};

enum client_PointOrientConstraint_t : uint32_t {
			PointOrientConstraint_t_eNone = 0x0,
			PointOrientConstraint_t_ePreserveUpAxis = 0x1
		};

enum client_PointTemplateClientOnlyEntityBehavior_t : uint32_t {
			PointTemplateClientOnlyEntityBehavior_t_CREATE_FOR_CLIENTS_WHO_CONNECT_LATER = 0x1,
			PointTemplateClientOnlyEntityBehavior_t_CREATE_FOR_CURRENTLY_CONNECTED_CLIENTS_ONLY = 0x0
		};

enum client_PointTemplateOwnerSpawnGroupType_t : uint32_t {
			PointTemplateOwnerSpawnGroupType_t_INSERT_INTO_CURRENTLY_ACTIVE_SPAWN_GROUP = 0x1,
			PointTemplateOwnerSpawnGroupType_t_INSERT_INTO_NEWLY_CREATED_SPAWN_GROUP = 0x2,
			PointTemplateOwnerSpawnGroupType_t_INSERT_INTO_POINT_TEMPLATE_SPAWN_GROUP = 0x0
		};

enum client_DamageTypes_t : uint32_t {
			DamageTypes_t_DMG_ACID = 0x40000,
			DamageTypes_t_DMG_BLAST = 0x40,
			DamageTypes_t_DMG_BLAST_SURFACE = 0x400000,
			DamageTypes_t_DMG_BUCKSHOT = 0x800,
			DamageTypes_t_DMG_BULLET = 0x2,
			DamageTypes_t_DMG_BURN = 0x8,
			DamageTypes_t_DMG_CLUB = 0x80,
			DamageTypes_t_DMG_CRUSH = 0x1,
			DamageTypes_t_DMG_DISSOLVE = 0x200000,
			DamageTypes_t_DMG_DROWN = 0x4000,
			DamageTypes_t_DMG_DROWNRECOVER = 0x20000,
			DamageTypes_t_DMG_ENERGYBEAM = 0x400,
			DamageTypes_t_DMG_FALL = 0x20,
			DamageTypes_t_DMG_GENERIC = 0x0,
			DamageTypes_t_DMG_HEADSHOT = 0x800000,
			DamageTypes_t_DMG_LASTGENERICFLAG = 0x400000,
			DamageTypes_t_DMG_PHYSGUN = 0x100000,
			DamageTypes_t_DMG_POISON = 0x8000,
			DamageTypes_t_DMG_RADIATION = 0x10000,
			DamageTypes_t_DMG_SHOCK = 0x100,
			DamageTypes_t_DMG_SLASH = 0x4,
			DamageTypes_t_DMG_SONIC = 0x200,
			DamageTypes_t_DMG_VEHICLE = 0x10
		};

enum client_TimelineCompression_t : uint32_t {
			TimelineCompression_t_TIMELINE_COMPRESSION_AVERAGE = 0x2,
			TimelineCompression_t_TIMELINE_COMPRESSION_AVERAGE_BLEND = 0x3,
			TimelineCompression_t_TIMELINE_COMPRESSION_COUNT_PER_INTERVAL = 0x1,
			TimelineCompression_t_TIMELINE_COMPRESSION_SUM = 0x0,
			TimelineCompression_t_TIMELINE_COMPRESSION_TOTAL = 0x4
		};

enum client_WeaponGameplayAnimState : uint16_t {
			WeaponGameplayAnimState_WEAPON_LEGACY_STATE_CLEAR_FIRING = 0x44d,
			WeaponGameplayAnimState_WPN_ANIMSTATE_C4_PLANT = 0x12c,
			WeaponGameplayAnimState_WPN_ANIMSTATE_CHARGE = 0x67,
			WeaponGameplayAnimState_WPN_ANIMSTATE_DEPLOY = 0xb,
			WeaponGameplayAnimState_WPN_ANIMSTATE_DROPPED = 0x1,
			WeaponGameplayAnimState_WPN_ANIMSTATE_END_VALID = 0x44c,
			WeaponGameplayAnimState_WPN_ANIMSTATE_GRENADE_PULL_PIN = 0xc8,
			WeaponGameplayAnimState_WPN_ANIMSTATE_GRENADE_READY = 0xc9,
			WeaponGameplayAnimState_WPN_ANIMSTATE_GRENADE_THROW = 0xca,
			WeaponGameplayAnimState_WPN_ANIMSTATE_HEALTHSHOT_INJECT = 0x190,
			WeaponGameplayAnimState_WPN_ANIMSTATE_HOLSTERED = 0xa,
			WeaponGameplayAnimState_WPN_ANIMSTATE_IDLE = 0x32,
			WeaponGameplayAnimState_WPN_ANIMSTATE_INSPECT = 0x3e8,
			WeaponGameplayAnimState_WPN_ANIMSTATE_INSPECT_OUTRO = 0x3e9,
			WeaponGameplayAnimState_WPN_ANIMSTATE_KNIFE_PRIMARY_HIT = 0x1f4,
			WeaponGameplayAnimState_WPN_ANIMSTATE_KNIFE_PRIMARY_MISS = 0x1f5,
			WeaponGameplayAnimState_WPN_ANIMSTATE_KNIFE_PRIMARY_STAB = 0x1f8,
			WeaponGameplayAnimState_WPN_ANIMSTATE_KNIFE_SECONDARY_HIT = 0x1f6,
			WeaponGameplayAnimState_WPN_ANIMSTATE_KNIFE_SECONDARY_MISS = 0x1f7,
			WeaponGameplayAnimState_WPN_ANIMSTATE_KNIFE_SECONDARY_STAB = 0x1f9,
			WeaponGameplayAnimState_WPN_ANIMSTATE_RELOAD = 0x320,
			WeaponGameplayAnimState_WPN_ANIMSTATE_RELOAD_OUTRO = 0x321,
			WeaponGameplayAnimState_WPN_ANIMSTATE_SHOOT_DRYFIRE = 0x66,
			WeaponGameplayAnimState_WPN_ANIMSTATE_SHOOT_PRIMARY = 0x64,
			WeaponGameplayAnimState_WPN_ANIMSTATE_SHOOT_SECONDARY = 0x65,
			WeaponGameplayAnimState_WPN_ANIMSTATE_SILENCER_APPLY = 0x258,
			WeaponGameplayAnimState_WPN_ANIMSTATE_SILENCER_REMOVE = 0x259,
			WeaponGameplayAnimState_WPN_ANIMSTATE_UNINITIALIZED = 0x0
		};

enum client_CSWeaponMode : uint32_t {
			CSWeaponMode_Primary_Mode = 0x0,
			CSWeaponMode_Secondary_Mode = 0x1,
			CSWeaponMode_WeaponMode_MAX = 0x2
		};

enum client_WaterWakeMode_t : uint32_t {
			WaterWakeMode_t_WATER_WAKE_IDLE = 0x1,
			WaterWakeMode_t_WATER_WAKE_NONE = 0x0,
			WaterWakeMode_t_WATER_WAKE_RUNNING = 0x3,
			WaterWakeMode_t_WATER_WAKE_WALKING = 0x2,
			WaterWakeMode_t_WATER_WAKE_WATER_OVERHEAD = 0x4
		};

enum client_DoorState_t : uint32_t {
			DoorState_t_DOOR_STATE_AJAR = 0x4,
			DoorState_t_DOOR_STATE_CLOSED = 0x0,
			DoorState_t_DOOR_STATE_CLOSING = 0x3,
			DoorState_t_DOOR_STATE_OPEN = 0x2,
			DoorState_t_DOOR_STATE_OPENING = 0x1
		};

enum client_PerformanceMode_t : uint32_t {
			PerformanceMode_t_PM_NORMAL = 0x0,
			PerformanceMode_t_PM_NO_GIBS = 0x1
		};

enum client_BreakableContentsType_t : uint32_t {
			BreakableContentsType_t_BC_DEFAULT = 0x0,
			BreakableContentsType_t_BC_EMPTY = 0x1,
			BreakableContentsType_t_BC_PARTICLE_SYSTEM_OVERRIDE = 0x3,
			BreakableContentsType_t_BC_PROP_GROUP_OVERRIDE = 0x2
		};

enum client_BeamType_t : uint32_t {
			BeamType_t_BEAM_ENTPOINT = 0x2,
			BeamType_t_BEAM_ENTS = 0x3,
			BeamType_t_BEAM_HOSE = 0x4,
			BeamType_t_BEAM_INVALID = 0x0,
			BeamType_t_BEAM_LASER = 0x6,
			BeamType_t_BEAM_POINTS = 0x1,
			BeamType_t_BEAM_SPLINE = 0x5
		};

enum client_BeamClipStyle_t : uint32_t {
			BeamClipStyle_t_kBEAMCLIPSTYLE_NUMBITS = 0x2,
			BeamClipStyle_t_kGEOCLIP = 0x1,
			BeamClipStyle_t_kMODELCLIP = 0x2,
			BeamClipStyle_t_kNOCLIP = 0x0
		};

enum client_C4LightEffect_t : uint32_t {
			C4LightEffect_t_eLightEffectDropped = 0x1,
			C4LightEffect_t_eLightEffectNone = 0x0,
			C4LightEffect_t_eLightEffectThirdPersonHeld = 0x2
		};

enum client_CSPlayerState : uint32_t {
			CSPlayerState_NUM_PLAYER_STATES = 0x9,
			CSPlayerState_STATE_ACTIVE = 0x0,
			CSPlayerState_STATE_DEATH_ANIM = 0x4,
			CSPlayerState_STATE_DEATH_WAIT_FOR_KEY = 0x5,
			CSPlayerState_STATE_DORMANT = 0x8,
			CSPlayerState_STATE_GUNGAME_RESPAWN = 0x7,
			CSPlayerState_STATE_OBSERVER_MODE = 0x6,
			CSPlayerState_STATE_PICKINGCLASS = 0x3,
			CSPlayerState_STATE_PICKINGTEAM = 0x2,
			CSPlayerState_STATE_WELCOME = 0x1
		};

enum client_CSPlayerBlockingUseAction_t : uint32_t {
			CSPlayerBlockingUseAction_t_k_CSPlayerBlockingUseAction_DefusingDefault = 0x1,
			CSPlayerBlockingUseAction_t_k_CSPlayerBlockingUseAction_DefusingWithKit = 0x2,
			CSPlayerBlockingUseAction_t_k_CSPlayerBlockingUseAction_HostageDropping = 0x4,
			CSPlayerBlockingUseAction_t_k_CSPlayerBlockingUseAction_HostageGrabbing = 0x3,
			CSPlayerBlockingUseAction_t_k_CSPlayerBlockingUseAction_MapLongUseEntity_Pickup = 0x5,
			CSPlayerBlockingUseAction_t_k_CSPlayerBlockingUseAction_MapLongUseEntity_Place = 0x6,
			CSPlayerBlockingUseAction_t_k_CSPlayerBlockingUseAction_MaxCount = 0x7,
			CSPlayerBlockingUseAction_t_k_CSPlayerBlockingUseAction_None = 0x0
		};

enum client_EntityDisolveType_t : uint32_t {
			EntityDisolveType_t_ENTITY_DISSOLVE_CORE = 0x3,
			EntityDisolveType_t_ENTITY_DISSOLVE_ELECTRICAL = 0x1,
			EntityDisolveType_t_ENTITY_DISSOLVE_ELECTRICAL_LIGHT = 0x2,
			EntityDisolveType_t_ENTITY_DISSOLVE_INVALID = 0xffffffff,
			EntityDisolveType_t_ENTITY_DISSOLVE_NORMAL = 0x0
		};

enum client_ValueRemapperInputType_t : uint32_t {
			ValueRemapperInputType_t_InputType_PlayerShootPosition = 0x0,
			ValueRemapperInputType_t_InputType_PlayerShootPositionAroundAxis = 0x1
		};

enum client_ValueRemapperOutputType_t : uint32_t {
			ValueRemapperOutputType_t_OutputType_AnimationCycle = 0x0,
			ValueRemapperOutputType_t_OutputType_RotationX = 0x1,
			ValueRemapperOutputType_t_OutputType_RotationY = 0x2,
			ValueRemapperOutputType_t_OutputType_RotationZ = 0x3
		};

enum client_ValueRemapperHapticsType_t : uint32_t {
			ValueRemapperHapticsType_t_HaticsType_Default = 0x0,
			ValueRemapperHapticsType_t_HaticsType_None = 0x1
		};

enum client_ValueRemapperMomentumType_t : uint32_t {
			ValueRemapperMomentumType_t_MomentumType_Friction = 0x1,
			ValueRemapperMomentumType_t_MomentumType_None = 0x0,
			ValueRemapperMomentumType_t_MomentumType_SpringAwayFromSnapValue = 0x3,
			ValueRemapperMomentumType_t_MomentumType_SpringTowardSnapValue = 0x2
		};

enum client_ValueRemapperRatchetType_t : uint32_t {
			ValueRemapperRatchetType_t_RatchetType_Absolute = 0x0,
			ValueRemapperRatchetType_t_RatchetType_EachEngage = 0x1
		};

enum client_PointWorldTextJustifyHorizontal_t : uint32_t {
			PointWorldTextJustifyHorizontal_t_POINT_WORLD_TEXT_JUSTIFY_HORIZONTAL_CENTER = 0x1,
			PointWorldTextJustifyHorizontal_t_POINT_WORLD_TEXT_JUSTIFY_HORIZONTAL_LEFT = 0x0,
			PointWorldTextJustifyHorizontal_t_POINT_WORLD_TEXT_JUSTIFY_HORIZONTAL_RIGHT = 0x2
		};

enum client_PointWorldTextJustifyVertical_t : uint32_t {
			PointWorldTextJustifyVertical_t_POINT_WORLD_TEXT_JUSTIFY_VERTICAL_BOTTOM = 0x0,
			PointWorldTextJustifyVertical_t_POINT_WORLD_TEXT_JUSTIFY_VERTICAL_CENTER = 0x1,
			PointWorldTextJustifyVertical_t_POINT_WORLD_TEXT_JUSTIFY_VERTICAL_TOP = 0x2
		};

enum client_PointWorldTextReorientMode_t : uint32_t {
			PointWorldTextReorientMode_t_POINT_WORLD_TEXT_REORIENT_AROUND_UP = 0x1,
			PointWorldTextReorientMode_t_POINT_WORLD_TEXT_REORIENT_NONE = 0x0
		};

enum client_ShardSolid_t : uint8_t {
			ShardSolid_t_SHARD_DEBRIS = 0x1,
			ShardSolid_t_SHARD_SOLID = 0x0
		};

enum client_FixAngleSet_t : uint8_t {
			FixAngleSet_t_Absolute = 0x1,
			FixAngleSet_t_None = 0x0,
			FixAngleSet_t_Relative = 0x2
		};

enum particleslib_ParticleFloatType_t : uint32_t {
			ParticleFloatType_t_PF_TYPE_CLOSEST_CAMERA_DISTANCE = 0xb,
			ParticleFloatType_t_PF_TYPE_COLLECTION_AGE = 0x4,
			ParticleFloatType_t_PF_TYPE_CONCURRENT_DEF_COUNT = 0xa,
			ParticleFloatType_t_PF_TYPE_CONTROL_POINT_CHANGE_AGE = 0x7,
			ParticleFloatType_t_PF_TYPE_CONTROL_POINT_COMPONENT = 0x6,
			ParticleFloatType_t_PF_TYPE_CONTROL_POINT_SPEED = 0x8,
			ParticleFloatType_t_PF_TYPE_COUNT = 0x1d,
			ParticleFloatType_t_PF_TYPE_ENDCAP_AGE = 0x5,
			ParticleFloatType_t_PF_TYPE_INVALID = 0xffffffff,
			ParticleFloatType_t_PF_TYPE_LITERAL = 0x0,
			ParticleFloatType_t_PF_TYPE_NAMED_VALUE = 0x1,
			ParticleFloatType_t_PF_TYPE_PARTICLE_AGE = 0x10,
			ParticleFloatType_t_PF_TYPE_PARTICLE_AGE_NORMALIZED = 0x11,
			ParticleFloatType_t_PF_TYPE_PARTICLE_DETAIL_LEVEL = 0x9,
			ParticleFloatType_t_PF_TYPE_PARTICLE_FLOAT = 0x12,
			ParticleFloatType_t_PF_TYPE_PARTICLE_INITIAL_FLOAT = 0x13,
			ParticleFloatType_t_PF_TYPE_PARTICLE_INITIAL_VECTOR_COMPONENT = 0x15,
			ParticleFloatType_t_PF_TYPE_PARTICLE_NOISE = 0xf,
			ParticleFloatType_t_PF_TYPE_PARTICLE_NUMBER = 0x17,
			ParticleFloatType_t_PF_TYPE_PARTICLE_NUMBER_NORMALIZED = 0x18,
			ParticleFloatType_t_PF_TYPE_PARTICLE_ROPE_SEGMENT = 0x19,
			ParticleFloatType_t_PF_TYPE_PARTICLE_ROPE_SEGMENT_NORMALIZED = 0x1a,
			ParticleFloatType_t_PF_TYPE_PARTICLE_SCREENSPACE_CAMERA_DISTANCE = 0x1b,
			ParticleFloatType_t_PF_TYPE_PARTICLE_SCREENSPACE_CAMERA_DOT_PRODUCT = 0x1c,
			ParticleFloatType_t_PF_TYPE_PARTICLE_SPEED = 0x16,
			ParticleFloatType_t_PF_TYPE_PARTICLE_VECTOR_COMPONENT = 0x14,
			ParticleFloatType_t_PF_TYPE_RANDOM_BIASED = 0x3,
			ParticleFloatType_t_PF_TYPE_RANDOM_UNIFORM = 0x2,
			ParticleFloatType_t_PF_TYPE_RENDERER_CAMERA_DISTANCE = 0xd,
			ParticleFloatType_t_PF_TYPE_RENDERER_CAMERA_DOT_PRODUCT = 0xe,
			ParticleFloatType_t_PF_TYPE_SNAPSHOT_COUNT = 0xc
		};

enum particleslib_ParticleFloatMapType_t : uint32_t {
			ParticleFloatMapType_t_PF_MAP_TYPE_COUNT = 0x7,
			ParticleFloatMapType_t_PF_MAP_TYPE_CURVE = 0x4,
			ParticleFloatMapType_t_PF_MAP_TYPE_DIRECT = 0x0,
			ParticleFloatMapType_t_PF_MAP_TYPE_INVALID = 0xffffffff,
			ParticleFloatMapType_t_PF_MAP_TYPE_MULT = 0x1,
			ParticleFloatMapType_t_PF_MAP_TYPE_NOTCHED = 0x5,
			ParticleFloatMapType_t_PF_MAP_TYPE_REMAP = 0x2,
			ParticleFloatMapType_t_PF_MAP_TYPE_REMAP_BIASED = 0x3,
			ParticleFloatMapType_t_PF_MAP_TYPE_ROUND = 0x6
		};

enum particleslib_ParticleFloatRandomMode_t : uint32_t {
			ParticleFloatRandomMode_t_PF_RANDOM_MODE_CONSTANT = 0x0,
			ParticleFloatRandomMode_t_PF_RANDOM_MODE_COUNT = 0x2,
			ParticleFloatRandomMode_t_PF_RANDOM_MODE_INVALID = 0xffffffff,
			ParticleFloatRandomMode_t_PF_RANDOM_MODE_VARYING = 0x1
		};

enum particleslib_PFNoiseTurbulence_t : uint32_t {
			PFNoiseTurbulence_t_PF_NOISE_TURB_ALTERNATE = 0x5,
			PFNoiseTurbulence_t_PF_NOISE_TURB_CONTRAST = 0x4,
			PFNoiseTurbulence_t_PF_NOISE_TURB_FEEDBACK = 0x2,
			PFNoiseTurbulence_t_PF_NOISE_TURB_HIGHLIGHT = 0x1,
			PFNoiseTurbulence_t_PF_NOISE_TURB_LOOPY = 0x3,
			PFNoiseTurbulence_t_PF_NOISE_TURB_NONE = 0x0
		};

enum particleslib_PFNoiseType_t : uint32_t {
			PFNoiseType_t_PF_NOISE_TYPE_CURL = 0x3,
			PFNoiseType_t_PF_NOISE_TYPE_PERLIN = 0x0,
			PFNoiseType_t_PF_NOISE_TYPE_SIMPLEX = 0x1,
			PFNoiseType_t_PF_NOISE_TYPE_WORLEY = 0x2
		};

enum particleslib_PFNoiseModifier_t : uint32_t {
			PFNoiseModifier_t_PF_NOISE_MODIFIER_CLUMPS = 0x2,
			PFNoiseModifier_t_PF_NOISE_MODIFIER_LINES = 0x1,
			PFNoiseModifier_t_PF_NOISE_MODIFIER_NONE = 0x0,
			PFNoiseModifier_t_PF_NOISE_MODIFIER_RINGS = 0x3
		};

enum particleslib_ParticleFloatInputMode_t : uint32_t {
			ParticleFloatInputMode_t_PF_INPUT_MODE_CLAMPED = 0x0,
			ParticleFloatInputMode_t_PF_INPUT_MODE_COUNT = 0x2,
			ParticleFloatInputMode_t_PF_INPUT_MODE_INVALID = 0xffffffff,
			ParticleFloatInputMode_t_PF_INPUT_MODE_LOOPED = 0x1
		};

enum particleslib_ParticleFloatRoundType_t : uint32_t {
			ParticleFloatRoundType_t_PF_ROUND_TYPE_CEIL = 0x2,
			ParticleFloatRoundType_t_PF_ROUND_TYPE_COUNT = 0x3,
			ParticleFloatRoundType_t_PF_ROUND_TYPE_FLOOR = 0x1,
			ParticleFloatRoundType_t_PF_ROUND_TYPE_INVALID = 0xffffffff,
			ParticleFloatRoundType_t_PF_ROUND_TYPE_NEAREST = 0x0
		};

enum particleslib_ParticleFloatBiasType_t : uint32_t {
			ParticleFloatBiasType_t_PF_BIAS_TYPE_COUNT = 0x3,
			ParticleFloatBiasType_t_PF_BIAS_TYPE_EXPONENTIAL = 0x2,
			ParticleFloatBiasType_t_PF_BIAS_TYPE_GAIN = 0x1,
			ParticleFloatBiasType_t_PF_BIAS_TYPE_INVALID = 0xffffffff,
			ParticleFloatBiasType_t_PF_BIAS_TYPE_STANDARD = 0x0
		};

enum particleslib_ParticleVecType_t : uint32_t {
			ParticleVecType_t_PVEC_TYPE_CLOSEST_CAMERA_POSITION = 0x11,
			ParticleVecType_t_PVEC_TYPE_COUNT = 0x12,
			ParticleVecType_t_PVEC_TYPE_CP_DELTA = 0x10,
			ParticleVecType_t_PVEC_TYPE_CP_RELATIVE_DIR = 0x8,
			ParticleVecType_t_PVEC_TYPE_CP_RELATIVE_POSITION = 0x7,
			ParticleVecType_t_PVEC_TYPE_CP_RELATIVE_RANDOM_DIR = 0x9,
			ParticleVecType_t_PVEC_TYPE_CP_VALUE = 0x6,
			ParticleVecType_t_PVEC_TYPE_FLOAT_COMPONENTS = 0xa,
			ParticleVecType_t_PVEC_TYPE_FLOAT_INTERP_CLAMPED = 0xb,
			ParticleVecType_t_PVEC_TYPE_FLOAT_INTERP_GRADIENT = 0xd,
			ParticleVecType_t_PVEC_TYPE_FLOAT_INTERP_OPEN = 0xc,
			ParticleVecType_t_PVEC_TYPE_INVALID = 0xffffffff,
			ParticleVecType_t_PVEC_TYPE_LITERAL = 0x0,
			ParticleVecType_t_PVEC_TYPE_LITERAL_COLOR = 0x1,
			ParticleVecType_t_PVEC_TYPE_NAMED_VALUE = 0x2,
			ParticleVecType_t_PVEC_TYPE_PARTICLE_INITIAL_VECTOR = 0x4,
			ParticleVecType_t_PVEC_TYPE_PARTICLE_VECTOR = 0x3,
			ParticleVecType_t_PVEC_TYPE_PARTICLE_VELOCITY = 0x5,
			ParticleVecType_t_PVEC_TYPE_RANDOM_UNIFORM = 0xe,
			ParticleVecType_t_PVEC_TYPE_RANDOM_UNIFORM_OFFSET = 0xf
		};

enum particleslib_ParticleModelType_t : uint32_t {
			ParticleModelType_t_PM_TYPE_CONTROL_POINT = 0x3,
			ParticleModelType_t_PM_TYPE_COUNT = 0x4,
			ParticleModelType_t_PM_TYPE_INVALID = 0x0,
			ParticleModelType_t_PM_TYPE_NAMED_VALUE_EHANDLE = 0x2,
			ParticleModelType_t_PM_TYPE_NAMED_VALUE_MODEL = 0x1
		};

enum particleslib_ParticleTransformType_t : uint32_t {
			ParticleTransformType_t_PT_TYPE_CONTROL_POINT = 0x2,
			ParticleTransformType_t_PT_TYPE_CONTROL_POINT_RANGE = 0x3,
			ParticleTransformType_t_PT_TYPE_COUNT = 0x4,
			ParticleTransformType_t_PT_TYPE_INVALID = 0x0,
			ParticleTransformType_t_PT_TYPE_NAMED_VALUE = 0x1
		};

enum animlib_NmIKBlendMode_t : uint8_t {
			NmIKBlendMode_t_Effector = 0x0,
			NmIKBlendMode_t_Pose = 0x1
		};

enum animlib_NmFootPhase_t : uint8_t {
			NmFootPhase_t_LeftFootDown = 0x0,
			NmFootPhase_t_LeftFootPassing = 0x3,
			NmFootPhase_t_RightFootDown = 0x2,
			NmFootPhase_t_RightFootPassing = 0x1
		};

enum animlib_NmFrameSnapEventMode_t : uint32_t {
			NmFrameSnapEventMode_t_Floor = 0x0,
			NmFrameSnapEventMode_t_Round = 0x1
		};

enum animlib_NmGraphEventTypeCondition_t : uint8_t {
			NmGraphEventTypeCondition_t_Any = 0x5,
			NmGraphEventTypeCondition_t_Entry = 0x0,
			NmGraphEventTypeCondition_t_Exit = 0x2,
			NmGraphEventTypeCondition_t_FullyInState = 0x1,
			NmGraphEventTypeCondition_t_Generic = 0x4,
			NmGraphEventTypeCondition_t_Timed = 0x3
		};

enum animlib_NmPoseBlendMode_t : uint8_t {
			NmPoseBlendMode_t_Additive = 0x1,
			NmPoseBlendMode_t_ModelSpace = 0x2,
			NmPoseBlendMode_t_Overlay = 0x0
		};

enum animlib_CNmEventRelevance_t : uint32_t {
			CNmEventRelevance_t_ClientAndServer = 0x2,
			CNmEventRelevance_t_ClientOnly = 0x0,
			CNmEventRelevance_t_ServerOnly = 0x1
		};

enum animlib_Type_t : uint32_t {
			Type_t_Create = 0x0,
			Type_t_Create_CFG = 0x1
		};

enum animlib_Position_t : uint32_t {
			Position_t_EntityAttachment = 0x4,
			Position_t_EntityEyePos = 0x3,
			Position_t_EntityPos = 0x2,
			Position_t_None = 0x0,
			Position_t_World = 0x1
		};

enum animlib_Comparison_t : uint8_t {
			Comparison_t_GreaterThanEqual = 0x1,
			Comparison_t_LessThanEqual = 0x0
		};

enum animlib_NmTargetWarpRule_t : uint8_t {
			NmTargetWarpRule_t_RotationOnly = 0x3,
			NmTargetWarpRule_t_WarpXY = 0x0,
			NmTargetWarpRule_t_WarpXYZ = 0x2,
			NmTargetWarpRule_t_WarpZ = 0x1
		};

enum animlib_NmTargetWarpAlgorithm_t : uint8_t {
			NmTargetWarpAlgorithm_t_Bezier = 0x3,
			NmTargetWarpAlgorithm_t_Hermite = 0x1,
			NmTargetWarpAlgorithm_t_HermiteFeaturePreserving = 0x2,
			NmTargetWarpAlgorithm_t_Lerp = 0x0
		};

enum animlib_NmTransitionRule_t : uint8_t {
			NmTransitionRule_t_AllowTransition = 0x0,
			NmTransitionRule_t_BlockTransition = 0x2,
			NmTransitionRule_t_ConditionallyAllowTransition = 0x1
		};

enum particles_ParticleColorBlendType_t : uint32_t {
			ParticleColorBlendType_t_PARTICLE_COLOR_BLEND_ADD = 0x3,
			ParticleColorBlendType_t_PARTICLE_COLOR_BLEND_AVERAGE = 0xa,
			ParticleColorBlendType_t_PARTICLE_COLOR_BLEND_DIVIDE = 0x2,
			ParticleColorBlendType_t_PARTICLE_COLOR_BLEND_LUMINANCE = 0xc,
			ParticleColorBlendType_t_PARTICLE_COLOR_BLEND_MAX = 0x7,
			ParticleColorBlendType_t_PARTICLE_COLOR_BLEND_MIN = 0x8,
			ParticleColorBlendType_t_PARTICLE_COLOR_BLEND_MOD2X = 0x5,
			ParticleColorBlendType_t_PARTICLE_COLOR_BLEND_MULTIPLY = 0x0,
			ParticleColorBlendType_t_PARTICLE_COLOR_BLEND_MULTIPLY2X = 0x1,
			ParticleColorBlendType_t_PARTICLE_COLOR_BLEND_NEGATE = 0xb,
			ParticleColorBlendType_t_PARTICLE_COLOR_BLEND_REPLACE = 0x9,
			ParticleColorBlendType_t_PARTICLE_COLOR_BLEND_SCREEN = 0x6,
			ParticleColorBlendType_t_PARTICLE_COLOR_BLEND_SUBTRACT = 0x4
		};

enum particles_SpriteCardShaderType_t : uint32_t {
			SpriteCardShaderType_t_SPRITECARD_SHADER_BASE = 0x0,
			SpriteCardShaderType_t_SPRITECARD_SHADER_CUSTOM = 0x1
		};

enum particles_ParticleSequenceCropOverride_t : uint32_t {
			ParticleSequenceCropOverride_t_PARTICLE_SEQUENCE_CROP_OVERRIDE_DEFAULT = 0xffffffff,
			ParticleSequenceCropOverride_t_PARTICLE_SEQUENCE_CROP_OVERRIDE_FORCE_OFF = 0x0,
			ParticleSequenceCropOverride_t_PARTICLE_SEQUENCE_CROP_OVERRIDE_FORCE_ON = 0x1
		};

enum particles_AnimationType_t : uint32_t {
			AnimationType_t_ANIMATION_TYPE_FIT_LIFETIME = 0x1,
			AnimationType_t_ANIMATION_TYPE_FIXED_RATE = 0x0,
			AnimationType_t_ANIMATION_TYPE_MANUAL_FRAMES = 0x2
		};

enum particles_ParticleOutputBlendMode_t : uint32_t {
			ParticleOutputBlendMode_t_PARTICLE_OUTPUT_BLEND_MODE_ADD = 0x1,
			ParticleOutputBlendMode_t_PARTICLE_OUTPUT_BLEND_MODE_ALPHA = 0x0,
			ParticleOutputBlendMode_t_PARTICLE_OUTPUT_BLEND_MODE_BLEND_ADD = 0x2,
			ParticleOutputBlendMode_t_PARTICLE_OUTPUT_BLEND_MODE_HALF_BLEND_ADD = 0x3,
			ParticleOutputBlendMode_t_PARTICLE_OUTPUT_BLEND_MODE_LIGHTEN = 0x6,
			ParticleOutputBlendMode_t_PARTICLE_OUTPUT_BLEND_MODE_MOD2X = 0x5,
			ParticleOutputBlendMode_t_PARTICLE_OUTPUT_BLEND_MODE_NEG_HALF_BLEND_ADD = 0x4
		};

enum particles_ParticleFogType_t : uint32_t {
			ParticleFogType_t_PARTICLE_FOG_DISABLED = 0x2,
			ParticleFogType_t_PARTICLE_FOG_ENABLED = 0x1,
			ParticleFogType_t_PARTICLE_FOG_GAME_DEFAULT = 0x0
		};

enum particles_SpriteCardPerParticleScale_t : uint32_t {
			SpriteCardPerParticleScale_t_SPRITECARD_TEXTURE_PP_SCALE_ANIMATION_FRAME = 0x2,
			SpriteCardPerParticleScale_t_SPRITECARD_TEXTURE_PP_SCALE_NEG_RANDOM = 0xb,
			SpriteCardPerParticleScale_t_SPRITECARD_TEXTURE_PP_SCALE_NEG_RANDOM_TIME = 0xd,
			SpriteCardPerParticleScale_t_SPRITECARD_TEXTURE_PP_SCALE_NONE = 0x0,
			SpriteCardPerParticleScale_t_SPRITECARD_TEXTURE_PP_SCALE_PARTICLE_AGE = 0x1,
			SpriteCardPerParticleScale_t_SPRITECARD_TEXTURE_PP_SCALE_PARTICLE_ALPHA = 0x5,
			SpriteCardPerParticleScale_t_SPRITECARD_TEXTURE_PP_SCALE_PITCH = 0x9,
			SpriteCardPerParticleScale_t_SPRITECARD_TEXTURE_PP_SCALE_RANDOM = 0xa,
			SpriteCardPerParticleScale_t_SPRITECARD_TEXTURE_PP_SCALE_RANDOM_TIME = 0xc,
			SpriteCardPerParticleScale_t_SPRITECARD_TEXTURE_PP_SCALE_ROLL = 0x7,
			SpriteCardPerParticleScale_t_SPRITECARD_TEXTURE_PP_SCALE_SHADER_EXTRA_DATA1 = 0x3,
			SpriteCardPerParticleScale_t_SPRITECARD_TEXTURE_PP_SCALE_SHADER_EXTRA_DATA2 = 0x4,
			SpriteCardPerParticleScale_t_SPRITECARD_TEXTURE_PP_SCALE_SHADER_RADIUS = 0x6,
			SpriteCardPerParticleScale_t_SPRITECARD_TEXTURE_PP_SCALE_YAW = 0x8
		};

enum particles_ParticleAlphaReferenceType_t : uint32_t {
			ParticleAlphaReferenceType_t_PARTICLE_ALPHA_REFERENCE_ALPHA_ALPHA = 0x0,
			ParticleAlphaReferenceType_t_PARTICLE_ALPHA_REFERENCE_ALPHA_OPAQUE = 0x2,
			ParticleAlphaReferenceType_t_PARTICLE_ALPHA_REFERENCE_OPAQUE_ALPHA = 0x1,
			ParticleAlphaReferenceType_t_PARTICLE_ALPHA_REFERENCE_OPAQUE_OPAQUE = 0x3
		};

enum particles_BlurFilterType_t : uint32_t {
			BlurFilterType_t_BLURFILTER_BOX = 0x1,
			BlurFilterType_t_BLURFILTER_GAUSSIAN = 0x0
		};

enum particles_ParticleDepthFeatheringMode_t : uint32_t {
			ParticleDepthFeatheringMode_t_PARTICLE_DEPTH_FEATHERING_OFF = 0x0,
			ParticleDepthFeatheringMode_t_PARTICLE_DEPTH_FEATHERING_ON_OPTIONAL = 0x1,
			ParticleDepthFeatheringMode_t_PARTICLE_DEPTH_FEATHERING_ON_REQUIRED = 0x2
		};

enum particles_ParticleSortingChoiceList_t : uint32_t {
			ParticleSortingChoiceList_t_PARTICLE_SORTING_CREATION_TIME = 0x1,
			ParticleSortingChoiceList_t_PARTICLE_SORTING_NEAREST = 0x0
		};

enum particles_ParticleEndcapMode_t : uint32_t {
			ParticleEndcapMode_t_PARTICLE_ENDCAP_ALWAYS_ON = 0xffffffff,
			ParticleEndcapMode_t_PARTICLE_ENDCAP_ENDCAP_OFF = 0x0,
			ParticleEndcapMode_t_PARTICLE_ENDCAP_ENDCAP_ON = 0x1
		};

enum particles_ParticleOrientationChoiceList_t : uint32_t {
			ParticleOrientationChoiceList_t_PARTICLE_ORIENTATION_ALIGN_TO_PARTICLE_NORMAL = 0x3,
			ParticleOrientationChoiceList_t_PARTICLE_ORIENTATION_FULL_3AXIS_ROTATION = 0x5,
			ParticleOrientationChoiceList_t_PARTICLE_ORIENTATION_SCREENALIGN_TO_PARTICLE_NORMAL = 0x4,
			ParticleOrientationChoiceList_t_PARTICLE_ORIENTATION_SCREEN_ALIGNED = 0x0,
			ParticleOrientationChoiceList_t_PARTICLE_ORIENTATION_SCREEN_Z_ALIGNED = 0x1,
			ParticleOrientationChoiceList_t_PARTICLE_ORIENTATION_WORLD_Z_ALIGNED = 0x2
		};

enum particles_ParticleOrientationSetMode_t : uint32_t {
			ParticleOrientationSetMode_t_PARTICLE_ORIENTATION_SET_FROM_NORMAL = 0x1,
			ParticleOrientationSetMode_t_PARTICLE_ORIENTATION_SET_FROM_ROTATIONS = 0x2,
			ParticleOrientationSetMode_t_PARTICLE_ORIENTATION_SET_FROM_VELOCITY = 0x0,
			ParticleOrientationSetMode_t_PARTICLE_ORIENTATION_SET_NONE = 0xffffffff
		};

enum particles_ParticleMassMode_t : uint32_t {
			ParticleMassMode_t_PARTICLE_MASSMODE_RADIUS_CUBED = 0x0,
			ParticleMassMode_t_PARTICLE_MASSMODE_RADIUS_SQUARED = 0x2
		};

enum particles_InheritableBoolType_t : uint32_t {
			InheritableBoolType_t_INHERITABLE_BOOL_FALSE = 0x1,
			InheritableBoolType_t_INHERITABLE_BOOL_INHERIT = 0x0,
			InheritableBoolType_t_INHERITABLE_BOOL_TRUE = 0x2
		};

enum particles_ParticleReplicationMode_t : uint32_t {
			ParticleReplicationMode_t_PARTICLE_REPLICATIONMODE_NONE = 0x0,
			ParticleReplicationMode_t_PARTICLE_REPLICATIONMODE_REPLICATE_FOR_EACH_PARENT_PARTICLE = 0x1
		};

enum particles_ParticleSetMethod_t : uint32_t {
			ParticleSetMethod_t_PARTICLE_SET_ADD_TO_CURRENT_VALUE = 0x5,
			ParticleSetMethod_t_PARTICLE_SET_ADD_TO_INITIAL_VALUE = 0x2,
			ParticleSetMethod_t_PARTICLE_SET_RAMP_CURRENT_VALUE = 0x3,
			ParticleSetMethod_t_PARTICLE_SET_REPLACE_VALUE = 0x0,
			ParticleSetMethod_t_PARTICLE_SET_SCALE_CURRENT_VALUE = 0x4,
			ParticleSetMethod_t_PARTICLE_SET_SCALE_INITIAL_VALUE = 0x1
		};

enum particles_ParticleColorBlendMode_t : uint32_t {
			ParticleColorBlendMode_t_PARTICLEBLEND_DARKEN = 0x2,
			ParticleColorBlendMode_t_PARTICLEBLEND_DEFAULT = 0x0,
			ParticleColorBlendMode_t_PARTICLEBLEND_LIGHTEN = 0x3,
			ParticleColorBlendMode_t_PARTICLEBLEND_MULTIPLY = 0x4,
			ParticleColorBlendMode_t_PARTICLEBLEND_OVERLAY = 0x1
		};

enum particles_ParticleHitboxBiasType_t : uint32_t {
			ParticleHitboxBiasType_t_PARTICLE_HITBOX_BIAS_ENTITY = 0x0,
			ParticleHitboxBiasType_t_PARTICLE_HITBOX_BIAS_HITBOX = 0x1
		};

enum particles_ParticleFalloffFunction_t : uint32_t {
			ParticleFalloffFunction_t_PARTICLE_FALLOFF_CONSTANT = 0x0,
			ParticleFalloffFunction_t_PARTICLE_FALLOFF_EXPONENTIAL = 0x2,
			ParticleFalloffFunction_t_PARTICLE_FALLOFF_LINEAR = 0x1
		};

enum particles_ParticleImpulseType_t : uint32_t {
			ParticleImpulseType_t_IMPULSE_TYPE_EXPLOSION = 0x4,
			ParticleImpulseType_t_IMPULSE_TYPE_EXPLOSION_UNDERWATER = 0x8,
			ParticleImpulseType_t_IMPULSE_TYPE_GENERIC = 0x1,
			ParticleImpulseType_t_IMPULSE_TYPE_NONE = 0x0,
			ParticleImpulseType_t_IMPULSE_TYPE_PARTICLE_SYSTEM = 0x10,
			ParticleImpulseType_t_IMPULSE_TYPE_ROPE = 0x2
		};

enum particles_ParticleTraceSet_t : uint32_t {
			ParticleTraceSet_t_PARTICLE_TRACE_SET_ALL = 0x0,
			ParticleTraceSet_t_PARTICLE_TRACE_SET_DYNAMIC = 0x3,
			ParticleTraceSet_t_PARTICLE_TRACE_SET_STATIC = 0x1,
			ParticleTraceSet_t_PARTICLE_TRACE_SET_STATIC_AND_KEYFRAMED = 0x2
		};

enum particles_EventTypeSelection_t : uint32_t {
			EventTypeSelection_t_PARTICLE_EVENT_TYPE_MASK_COLLISION = 0x4,
			EventTypeSelection_t_PARTICLE_EVENT_TYPE_MASK_COLLISION_STOPPED = 0x10,
			EventTypeSelection_t_PARTICLE_EVENT_TYPE_MASK_FIRST_COLLISION = 0x8,
			EventTypeSelection_t_PARTICLE_EVENT_TYPE_MASK_KILLED = 0x2,
			EventTypeSelection_t_PARTICLE_EVENT_TYPE_MASK_KILLED_ON_COLLISION = 0x20,
			EventTypeSelection_t_PARTICLE_EVENT_TYPE_MASK_NONE = 0x0,
			EventTypeSelection_t_PARTICLE_EVENT_TYPE_MASK_SPAWNED = 0x1,
			EventTypeSelection_t_PARTICLE_EVENT_TYPE_MASK_USER_1 = 0x40,
			EventTypeSelection_t_PARTICLE_EVENT_TYPE_MASK_USER_2 = 0x80,
			EventTypeSelection_t_PARTICLE_EVENT_TYPE_MASK_USER_3 = 0x100,
			EventTypeSelection_t_PARTICLE_EVENT_TYPE_MASK_USER_4 = 0x200
		};

enum particles_SnapshotIndexType_t : uint32_t {
			SnapshotIndexType_t_SNAPSHOT_INDEX_DIRECT = 0x1,
			SnapshotIndexType_t_SNAPSHOT_INDEX_INCREMENT = 0x0
		};

enum particles_ParticleControlPointAxis_t : uint32_t {
			ParticleControlPointAxis_t_PARTICLE_CP_AXIS_NEGATIVE_X = 0x3,
			ParticleControlPointAxis_t_PARTICLE_CP_AXIS_NEGATIVE_Y = 0x4,
			ParticleControlPointAxis_t_PARTICLE_CP_AXIS_NEGATIVE_Z = 0x5,
			ParticleControlPointAxis_t_PARTICLE_CP_AXIS_X = 0x0,
			ParticleControlPointAxis_t_PARTICLE_CP_AXIS_Y = 0x1,
			ParticleControlPointAxis_t_PARTICLE_CP_AXIS_Z = 0x2
		};

enum particles_ParticleTraceMissBehavior_t : uint32_t {
			ParticleTraceMissBehavior_t_PARTICLE_TRACE_MISS_BEHAVIOR_KILL = 0x1,
			ParticleTraceMissBehavior_t_PARTICLE_TRACE_MISS_BEHAVIOR_NONE = 0x0,
			ParticleTraceMissBehavior_t_PARTICLE_TRACE_MISS_BEHAVIOR_TRACE_END = 0x2
		};

enum particles_ScalarExpressionType_t : uint32_t {
			ScalarExpressionType_t_SCALAR_EXPRESSION_ADD = 0x0,
			ScalarExpressionType_t_SCALAR_EXPRESSION_DIVIDE = 0x3,
			ScalarExpressionType_t_SCALAR_EXPRESSION_EQUAL = 0x8,
			ScalarExpressionType_t_SCALAR_EXPRESSION_GT = 0x9,
			ScalarExpressionType_t_SCALAR_EXPRESSION_INPUT_1 = 0x4,
			ScalarExpressionType_t_SCALAR_EXPRESSION_LT = 0xa,
			ScalarExpressionType_t_SCALAR_EXPRESSION_MAX = 0x6,
			ScalarExpressionType_t_SCALAR_EXPRESSION_MIN = 0x5,
			ScalarExpressionType_t_SCALAR_EXPRESSION_MOD = 0x7,
			ScalarExpressionType_t_SCALAR_EXPRESSION_MUL = 0x2,
			ScalarExpressionType_t_SCALAR_EXPRESSION_SUBTRACT = 0x1,
			ScalarExpressionType_t_SCALAR_EXPRESSION_UNINITIALIZED = 0xffffffff
		};

enum particles_VectorFloatExpressionType_t : uint32_t {
			VectorFloatExpressionType_t_VECTOR_FLOAT_EXPRESSION_DISTANCE = 0x1,
			VectorFloatExpressionType_t_VECTOR_FLOAT_EXPRESSION_DISTANCESQR = 0x2,
			VectorFloatExpressionType_t_VECTOR_FLOAT_EXPRESSION_DOTPRODUCT = 0x0,
			VectorFloatExpressionType_t_VECTOR_FLOAT_EXPRESSION_INPUT1_LENGTH = 0x3,
			VectorFloatExpressionType_t_VECTOR_FLOAT_EXPRESSION_INPUT1_LENGTHSQR = 0x4,
			VectorFloatExpressionType_t_VECTOR_FLOAT_EXPRESSION_INPUT1_NOISE = 0x5,
			VectorFloatExpressionType_t_VECTOR_FLOAT_EXPRESSION_UNINITIALIZED = 0xffffffff
		};

enum particles_ClosestPointTestType_t : uint32_t {
			ClosestPointTestType_t_PARTICLE_CLOSEST_TYPE_BOX = 0x0,
			ClosestPointTestType_t_PARTICLE_CLOSEST_TYPE_CAPSULE = 0x1,
			ClosestPointTestType_t_PARTICLE_CLOSEST_TYPE_HYBRID = 0x2
		};

enum particles_VectorExpressionType_t : uint32_t {
			VectorExpressionType_t_VECTOR_EXPRESSION_ADD = 0x0,
			VectorExpressionType_t_VECTOR_EXPRESSION_CROSSPRODUCT = 0x7,
			VectorExpressionType_t_VECTOR_EXPRESSION_DIVIDE = 0x3,
			VectorExpressionType_t_VECTOR_EXPRESSION_INPUT_1 = 0x4,
			VectorExpressionType_t_VECTOR_EXPRESSION_LERP = 0x8,
			VectorExpressionType_t_VECTOR_EXPRESSION_MAX = 0x6,
			VectorExpressionType_t_VECTOR_EXPRESSION_MIN = 0x5,
			VectorExpressionType_t_VECTOR_EXPRESSION_MUL = 0x2,
			VectorExpressionType_t_VECTOR_EXPRESSION_SUBTRACT = 0x1,
			VectorExpressionType_t_VECTOR_EXPRESSION_UNINITIALIZED = 0xffffffff
		};

enum particles_Detail2Combo_t : uint32_t {
			Detail2Combo_t_DETAIL_2_COMBO_ADD = 0x1,
			Detail2Combo_t_DETAIL_2_COMBO_ADD_SELF_ILLUM = 0x2,
			Detail2Combo_t_DETAIL_2_COMBO_CROSSFADE = 0x5,
			Detail2Combo_t_DETAIL_2_COMBO_MOD2X = 0x3,
			Detail2Combo_t_DETAIL_2_COMBO_MUL = 0x4,
			Detail2Combo_t_DETAIL_2_COMBO_OFF = 0x0,
			Detail2Combo_t_DETAIL_2_COMBO_UNINITIALIZED = 0xffffffff
		};

enum particles_DetailCombo_t : uint32_t {
			DetailCombo_t_DETAIL_COMBO_ADD = 0x1,
			DetailCombo_t_DETAIL_COMBO_ADD_SELF_ILLUM = 0x2,
			DetailCombo_t_DETAIL_COMBO_MOD2X = 0x3,
			DetailCombo_t_DETAIL_COMBO_OFF = 0x0
		};

enum particles_ParticleAttrBoxFlags_t : uint32_t {
			ParticleAttrBoxFlags_t_PARTICLE_ATTR_BOX_FLAGS_ASLEEP = 0x8,
			ParticleAttrBoxFlags_t_PARTICLE_ATTR_BOX_FLAGS_ELECTRIFIED = 0x4,
			ParticleAttrBoxFlags_t_PARTICLE_ATTR_BOX_FLAGS_FROZEN = 0x10,
			ParticleAttrBoxFlags_t_PARTICLE_ATTR_BOX_FLAGS_NONE = 0x0,
			ParticleAttrBoxFlags_t_PARTICLE_ATTR_BOX_FLAGS_ON_FIRE = 0x2,
			ParticleAttrBoxFlags_t_PARTICLE_ATTR_BOX_FLAGS_TIMED_DECAY = 0x20,
			ParticleAttrBoxFlags_t_PARTICLE_ATTR_BOX_FLAGS_WATER = 0x1
		};

enum particles_ParticleDirectionNoiseType_t : uint32_t {
			ParticleDirectionNoiseType_t_PARTICLE_DIR_NOISE_CURL = 0x1,
			ParticleDirectionNoiseType_t_PARTICLE_DIR_NOISE_PERLIN = 0x0,
			ParticleDirectionNoiseType_t_PARTICLE_DIR_NOISE_WORLEY_BASIC = 0x2
		};

enum particles_ParticleParentSetMode_t : uint32_t {
			ParticleParentSetMode_t_PARTICLE_SET_PARENT_IMMEDIATE = 0x1,
			ParticleParentSetMode_t_PARTICLE_SET_PARENT_NO = 0x0,
			ParticleParentSetMode_t_PARTICLE_SET_PARENT_ROOT = 0x2
		};

enum particles_ParticleCollisionMask_t : uint64_t {
			ParticleCollisionMask_t_PARTICLE_MASK_ALL = 0xffffffffffffffff,
			ParticleCollisionMask_t_PARTICLE_MASK_DEFAULTPLAYERSOLID = 0xc3011,
			ParticleCollisionMask_t_PARTICLE_MASK_NPCSOLID = 0xc3021,
			ParticleCollisionMask_t_PARTICLE_MASK_OPAQUE = 0x80,
			ParticleCollisionMask_t_PARTICLE_MASK_SHOT = 0x1c1003,
			ParticleCollisionMask_t_PARTICLE_MASK_SHOT_BRUSHONLY = 0x101001,
			ParticleCollisionMask_t_PARTICLE_MASK_SHOT_HULL = 0x1c3001,
			ParticleCollisionMask_t_PARTICLE_MASK_SOLID = 0xc3001,
			ParticleCollisionMask_t_PARTICLE_MASK_SOLID_WATER = 0xdb001,
			ParticleCollisionMask_t_PARTICLE_MASK_WATER = 0x18000
		};

enum particles_ParticleCollisionGroup_t : uint32_t {
			ParticleCollisionGroup_t_PARTICLE_COLLISION_GROUP_DEBRIS = 0x5,
			ParticleCollisionGroup_t_PARTICLE_COLLISION_GROUP_DEFAULT = 0x4,
			ParticleCollisionGroup_t_PARTICLE_COLLISION_GROUP_INTERACTIVE = 0x7,
			ParticleCollisionGroup_t_PARTICLE_COLLISION_GROUP_NPC = 0xc,
			ParticleCollisionGroup_t_PARTICLE_COLLISION_GROUP_PLAYER = 0x8,
			ParticleCollisionGroup_t_PARTICLE_COLLISION_GROUP_PROPS = 0x18,
			ParticleCollisionGroup_t_PARTICLE_COLLISION_GROUP_VEHICLE = 0xa
		};

enum particles_MissingParentInheritBehavior_t : uint32_t {
			MissingParentInheritBehavior_t_MISSING_PARENT_DO_NOTHING = 0xffffffff,
			MissingParentInheritBehavior_t_MISSING_PARENT_FIND_NEW = 0x1,
			MissingParentInheritBehavior_t_MISSING_PARENT_KILL = 0x0,
			MissingParentInheritBehavior_t_MISSING_PARENT_SAME_INDEX = 0x2
		};

enum particles_ParticleLightnintBranchBehavior_t : uint32_t {
			ParticleLightnintBranchBehavior_t_PARTICLE_LIGHTNING_BRANCH_CURRENT_DIR = 0x0,
			ParticleLightnintBranchBehavior_t_PARTICLE_LIGHTNING_BRANCH_ENDPOINT_DIR = 0x1
		};

enum particles_ParticleRotationLockType_t : uint32_t {
			ParticleRotationLockType_t_PARTICLE_ROTATION_LOCK_NONE = 0x0,
			ParticleRotationLockType_t_PARTICLE_ROTATION_LOCK_NORMAL = 0x2,
			ParticleRotationLockType_t_PARTICLE_ROTATION_LOCK_ROTATIONS = 0x1
		};

enum particles_HitboxLerpType_t : uint32_t {
			HitboxLerpType_t_HITBOX_LERP_CONSTANT = 0x1,
			HitboxLerpType_t_HITBOX_LERP_LIFETIME = 0x0
		};

enum particles_ParticleSelection_t : uint32_t {
			ParticleSelection_t_PARTICLE_SELECTION_FIRST = 0x0,
			ParticleSelection_t_PARTICLE_SELECTION_LAST = 0x1,
			ParticleSelection_t_PARTICLE_SELECTION_NUMBER = 0x2
		};

enum particles_ParticlePinDistance_t : uint32_t {
			ParticlePinDistance_t_PARTICLE_PIN_COLLECTION_AGE = 0xa,
			ParticlePinDistance_t_PARTICLE_PIN_DISTANCE_CENTER = 0x5,
			ParticlePinDistance_t_PARTICLE_PIN_DISTANCE_CP = 0x6,
			ParticlePinDistance_t_PARTICLE_PIN_DISTANCE_CP_PAIR_BOTH = 0x8,
			ParticlePinDistance_t_PARTICLE_PIN_DISTANCE_CP_PAIR_EITHER = 0x7,
			ParticlePinDistance_t_PARTICLE_PIN_DISTANCE_FARTHEST = 0x1,
			ParticlePinDistance_t_PARTICLE_PIN_DISTANCE_FIRST = 0x2,
			ParticlePinDistance_t_PARTICLE_PIN_DISTANCE_LAST = 0x3,
			ParticlePinDistance_t_PARTICLE_PIN_DISTANCE_NEIGHBOR = 0x0,
			ParticlePinDistance_t_PARTICLE_PIN_DISTANCE_NONE = 0xffffffff,
			ParticlePinDistance_t_PARTICLE_PIN_FLOAT_VALUE = 0xb,
			ParticlePinDistance_t_PARTICLE_PIN_SPEED = 0x9
		};

enum particles_ParticleHitboxDataSelection_t : uint32_t {
			ParticleHitboxDataSelection_t_PARTICLE_HITBOX_AVERAGE_SPEED = 0x0,
			ParticleHitboxDataSelection_t_PARTICLE_HITBOX_COUNT = 0x1
		};

enum particles_SetStatisticExpressionType_t : uint32_t {
			SetStatisticExpressionType_t_SET_EXPRESSION_MAX = 0x6,
			SetStatisticExpressionType_t_SET_EXPRESSION_MEAN = 0x1,
			SetStatisticExpressionType_t_SET_EXPRESSION_MEDIAN = 0x2,
			SetStatisticExpressionType_t_SET_EXPRESSION_MIN = 0x5,
			SetStatisticExpressionType_t_SET_EXPRESSION_MODE = 0x3,
			SetStatisticExpressionType_t_SET_EXPRESSION_STANDARD_DEVIATION = 0x4,
			SetStatisticExpressionType_t_SET_EXPRESSION_SUM = 0x0,
			SetStatisticExpressionType_t_SET_EXPRESSION_UNINITIALIZED = 0xffffffff
		};

enum particles_BBoxVolumeType_t : uint32_t {
			BBoxVolumeType_t_BBOX_DIMENSIONS = 0x1,
			BBoxVolumeType_t_BBOX_MINS_MAXS = 0x2,
			BBoxVolumeType_t_BBOX_VOLUME = 0x0
		};

enum particles_TextureRepetitionMode_t : uint32_t {
			TextureRepetitionMode_t_TEXTURE_REPETITION_PARTICLE = 0x0,
			TextureRepetitionMode_t_TEXTURE_REPETITION_PATH = 0x1
		};

enum particles_MaterialProxyType_t : uint32_t {
			MaterialProxyType_t_MATERIAL_PROXY_STATUS_EFFECT = 0x0,
			MaterialProxyType_t_MATERIAL_PROXY_TINT = 0x1
		};

enum particles_RenderModelSubModelFieldType_t : uint32_t {
			RenderModelSubModelFieldType_t_SUBMODEL_AS_BODYGROUP_SUBMODEL = 0x0,
			RenderModelSubModelFieldType_t_SUBMODEL_AS_MESHGROUP_INDEX = 0x1,
			RenderModelSubModelFieldType_t_SUBMODEL_AS_MESHGROUP_MASK = 0x2,
			RenderModelSubModelFieldType_t_SUBMODEL_IGNORED_USE_MODEL_DEFAULT_MESHGROUP_MASK = 0x3
		};

enum particles_ParticleOmni2LightTypeChoiceList_t : uint32_t {
			ParticleOmni2LightTypeChoiceList_t_PARTICLE_OMNI2_LIGHT_TYPE_POINT = 0x0,
			ParticleOmni2LightTypeChoiceList_t_PARTICLE_OMNI2_LIGHT_TYPE_SPHERE = 0x1
		};

enum particles_ParticleLightUnitChoiceList_t : uint32_t {
			ParticleLightUnitChoiceList_t_PARTICLE_LIGHT_UNIT_CANDELAS = 0x0,
			ParticleLightUnitChoiceList_t_PARTICLE_LIGHT_UNIT_LUMENS = 0x1
		};

enum particles_ParticlePostProcessPriorityGroup_t : uint32_t {
			ParticlePostProcessPriorityGroup_t_PARTICLE_POST_PROCESS_PRIORITY_GAMEPLAY_EFFECT = 0x2,
			ParticlePostProcessPriorityGroup_t_PARTICLE_POST_PROCESS_PRIORITY_GAMEPLAY_STATE_HIGH = 0x4,
			ParticlePostProcessPriorityGroup_t_PARTICLE_POST_PROCESS_PRIORITY_GAMEPLAY_STATE_LOW = 0x3,
			ParticlePostProcessPriorityGroup_t_PARTICLE_POST_PROCESS_PRIORITY_GLOBAL_UI = 0x5,
			ParticlePostProcessPriorityGroup_t_PARTICLE_POST_PROCESS_PRIORITY_LEVEL_OVERRIDE = 0x1,
			ParticlePostProcessPriorityGroup_t_PARTICLE_POST_PROCESS_PRIORITY_LEVEL_VOLUME = 0x0
		};

enum particles_ParticleLightingQuality_t : uint32_t {
			ParticleLightingQuality_t_PARTICLE_LIGHTING_ADD_EXTRA_LIGHT = 0x4,
			ParticleLightingQuality_t_PARTICLE_LIGHTING_OVERRIDE_COLOR = 0x3,
			ParticleLightingQuality_t_PARTICLE_LIGHTING_OVERRIDE_POSITION = 0x2,
			ParticleLightingQuality_t_PARTICLE_LIGHTING_PER_PARTICLE = 0x0,
			ParticleLightingQuality_t_PARTICLE_LIGHTING_PER_PIXEL = 0xffffffff,
			ParticleLightingQuality_t_PARTICLE_LIGHTING_PER_VERTEX = 0x1
		};

enum particles_ParticleLightTypeChoiceList_t : uint32_t {
			ParticleLightTypeChoiceList_t_PARTICLE_LIGHT_TYPE_CAPSULE = 0x3,
			ParticleLightTypeChoiceList_t_PARTICLE_LIGHT_TYPE_FX = 0x2,
			ParticleLightTypeChoiceList_t_PARTICLE_LIGHT_TYPE_POINT = 0x0,
			ParticleLightTypeChoiceList_t_PARTICLE_LIGHT_TYPE_SPOT = 0x1
		};

enum particles_StandardLightingAttenuationStyle_t : uint32_t {
			StandardLightingAttenuationStyle_t_LIGHT_STYLE_NEW = 0x1,
			StandardLightingAttenuationStyle_t_LIGHT_STYLE_OLD = 0x0
		};

enum particles_ParticleLightFogLightingMode_t : uint32_t {
			ParticleLightFogLightingMode_t_PARTICLE_LIGHT_FOG_LIGHTING_MODE_DYNAMIC = 0x2,
			ParticleLightFogLightingMode_t_PARTICLE_LIGHT_FOG_LIGHTING_MODE_DYNAMIC_NOSHADOWS = 0x4,
			ParticleLightFogLightingMode_t_PARTICLE_LIGHT_FOG_LIGHTING_MODE_NONE = 0x0
		};

enum particles_ParticleLightBehaviorChoiceList_t : uint32_t {
			ParticleLightBehaviorChoiceList_t_PARTICLE_LIGHT_BEHAVIOR_FOLLOW_DIRECTION = 0x0,
			ParticleLightBehaviorChoiceList_t_PARTICLE_LIGHT_BEHAVIOR_ROPE = 0x1,
			ParticleLightBehaviorChoiceList_t_PARTICLE_LIGHT_BEHAVIOR_TRAILS = 0x2
		};

enum particles_ParticleVRHandChoiceList_t : uint32_t {
			ParticleVRHandChoiceList_t_PARTICLE_VRHAND_CP = 0x2,
			ParticleVRHandChoiceList_t_PARTICLE_VRHAND_CP_OBJECT = 0x3,
			ParticleVRHandChoiceList_t_PARTICLE_VRHAND_LEFT = 0x0,
			ParticleVRHandChoiceList_t_PARTICLE_VRHAND_RIGHT = 0x1
		};

enum particles_ParticleOrientationType_t : uint32_t {
			ParticleOrientationType_t_PARTICLE_ORIENTATION_NONE = 0x0,
			ParticleOrientationType_t_PARTICLE_ORIENTATION_NORMAL = 0x2,
			ParticleOrientationType_t_PARTICLE_ORIENTATION_ROTATION = 0x4,
			ParticleOrientationType_t_PARTICLE_ORIENTATION_VELOCITY = 0x1
		};

enum particles_ParticleCollisionMode_t : uint32_t {
			ParticleCollisionMode_t_COLLISION_MODE_DISABLED = 0xffffffff,
			ParticleCollisionMode_t_COLLISION_MODE_INITIAL_TRACE_DOWN = 0x0,
			ParticleCollisionMode_t_COLLISION_MODE_PER_FRAME_PLANESET = 0x1,
			ParticleCollisionMode_t_COLLISION_MODE_PER_PARTICLE_TRACE = 0x3,
			ParticleCollisionMode_t_COLLISION_MODE_USE_NEAREST_TRACE = 0x2
		};

enum particles_ParticleDetailLevel_t : uint32_t {
			ParticleDetailLevel_t_PARTICLEDETAIL_HIGH = 0x2,
			ParticleDetailLevel_t_PARTICLEDETAIL_LOW = 0x0,
			ParticleDetailLevel_t_PARTICLEDETAIL_MEDIUM = 0x1,
			ParticleDetailLevel_t_PARTICLEDETAIL_ULTRA = 0x3
		};

enum particles_PetGroundType_t : uint32_t {
			PetGroundType_t_PET_GROUND_GRID = 0x1,
			PetGroundType_t_PET_GROUND_NONE = 0x0,
			PetGroundType_t_PET_GROUND_PLANE = 0x2
		};

enum particles_SpriteCardTextureType_t : uint32_t {
			SpriteCardTextureType_t_SPRITECARD_TEXTURE_1D_COLOR_LOOKUP = 0x2,
			SpriteCardTextureType_t_SPRITECARD_TEXTURE_ANIMMOTIONVEC = 0x6,
			SpriteCardTextureType_t_SPRITECARD_TEXTURE_DEPTH = 0xa,
			SpriteCardTextureType_t_SPRITECARD_TEXTURE_DIFFUSE = 0x0,
			SpriteCardTextureType_t_SPRITECARD_TEXTURE_ILLUMINATION_GRADIENT = 0xb,
			SpriteCardTextureType_t_SPRITECARD_TEXTURE_NORMALMAP = 0x5,
			SpriteCardTextureType_t_SPRITECARD_TEXTURE_SPHERICAL_HARMONICS_A = 0x7,
			SpriteCardTextureType_t_SPRITECARD_TEXTURE_SPHERICAL_HARMONICS_B = 0x8,
			SpriteCardTextureType_t_SPRITECARD_TEXTURE_SPHERICAL_HARMONICS_C = 0x9,
			SpriteCardTextureType_t_SPRITECARD_TEXTURE_UVDISTORTION = 0x3,
			SpriteCardTextureType_t_SPRITECARD_TEXTURE_UVDISTORTION_ZOOM = 0x4,
			SpriteCardTextureType_t_SPRITECARD_TEXTURE_ZOOM = 0x1
		};

enum particles_SpriteCardTextureChannel_t : uint32_t {
			SpriteCardTextureChannel_t_SPRITECARD_TEXTURE_CHANNEL_MIX_A = 0x2,
			SpriteCardTextureChannel_t_SPRITECARD_TEXTURE_CHANNEL_MIX_A_RGBALPHA = 0x7,
			SpriteCardTextureChannel_t_SPRITECARD_TEXTURE_CHANNEL_MIX_B = 0xb,
			SpriteCardTextureChannel_t_SPRITECARD_TEXTURE_CHANNEL_MIX_BALPHA = 0xe,
			SpriteCardTextureChannel_t_SPRITECARD_TEXTURE_CHANNEL_MIX_G = 0xa,
			SpriteCardTextureChannel_t_SPRITECARD_TEXTURE_CHANNEL_MIX_GALPHA = 0xd,
			SpriteCardTextureChannel_t_SPRITECARD_TEXTURE_CHANNEL_MIX_R = 0x9,
			SpriteCardTextureChannel_t_SPRITECARD_TEXTURE_CHANNEL_MIX_RALPHA = 0xc,
			SpriteCardTextureChannel_t_SPRITECARD_TEXTURE_CHANNEL_MIX_RGB = 0x0,
			SpriteCardTextureChannel_t_SPRITECARD_TEXTURE_CHANNEL_MIX_RGBA = 0x1,
			SpriteCardTextureChannel_t_SPRITECARD_TEXTURE_CHANNEL_MIX_RGBA_RGBALPHA = 0x6,
			SpriteCardTextureChannel_t_SPRITECARD_TEXTURE_CHANNEL_MIX_RGB_A = 0x3,
			SpriteCardTextureChannel_t_SPRITECARD_TEXTURE_CHANNEL_MIX_RGB_ALPHAMASK = 0x4,
			SpriteCardTextureChannel_t_SPRITECARD_TEXTURE_CHANNEL_MIX_RGB_A_RGBALPHA = 0x8,
			SpriteCardTextureChannel_t_SPRITECARD_TEXTURE_CHANNEL_MIX_RGB_RGBMASK = 0x5
		};

enum particles_ParticleTextureLayerBlendType_t : uint32_t {
			ParticleTextureLayerBlendType_t_SPRITECARD_TEXTURE_BLEND_ADD = 0x3,
			ParticleTextureLayerBlendType_t_SPRITECARD_TEXTURE_BLEND_AVERAGE = 0x5,
			ParticleTextureLayerBlendType_t_SPRITECARD_TEXTURE_BLEND_LUMINANCE = 0x6,
			ParticleTextureLayerBlendType_t_SPRITECARD_TEXTURE_BLEND_MOD2X = 0x1,
			ParticleTextureLayerBlendType_t_SPRITECARD_TEXTURE_BLEND_MULTIPLY = 0x0,
			ParticleTextureLayerBlendType_t_SPRITECARD_TEXTURE_BLEND_REPLACE = 0x2,
			ParticleTextureLayerBlendType_t_SPRITECARD_TEXTURE_BLEND_SUBTRACT = 0x4
		};

enum physicslib_DynamicContinuousContactBehavior_t : uint8_t {
			DynamicContinuousContactBehavior_t_DYNAMIC_CONTINUOUS_ALLOW_IF_REQUESTED_BY_OTHER_BODY = 0x0,
			DynamicContinuousContactBehavior_t_DYNAMIC_CONTINUOUS_ALWAYS = 0x1,
			DynamicContinuousContactBehavior_t_DYNAMIC_CONTINUOUS_NEVER = 0x2
		};

enum soundsystem_lowlevel_VMixLFOShape_t : uint32_t {
			VMixLFOShape_t_LFO_SHAPE_NOISE = 0x4,
			VMixLFOShape_t_LFO_SHAPE_SAW = 0x3,
			VMixLFOShape_t_LFO_SHAPE_SINE = 0x0,
			VMixLFOShape_t_LFO_SHAPE_SQUARE = 0x1,
			VMixLFOShape_t_LFO_SHAPE_TRI = 0x2
		};

enum soundsystem_lowlevel_VMixFilterType_t : uint16_t {
			VMixFilterType_t_FILTER_ALLPASS = 0x7,
			VMixFilterType_t_FILTER_BANDPASS = 0x2,
			VMixFilterType_t_FILTER_HIGHPASS = 0x1,
			VMixFilterType_t_FILTER_HIGH_SHELF = 0x6,
			VMixFilterType_t_FILTER_LOWPASS = 0x0,
			VMixFilterType_t_FILTER_LOW_SHELF = 0x5,
			VMixFilterType_t_FILTER_NOTCH = 0x3,
			VMixFilterType_t_FILTER_PASSTHROUGH = 0x8,
			VMixFilterType_t_FILTER_PEAKING_EQ = 0x4,
			VMixFilterType_t_FILTER_UNKNOWN = 0xffff
		};

enum soundsystem_lowlevel_VMixFilterSlope_t : uint8_t {
			VMixFilterSlope_t_FILTER_SLOPE_12dB = 0x4,
			VMixFilterSlope_t_FILTER_SLOPE_1POLE_12dB = 0x1,
			VMixFilterSlope_t_FILTER_SLOPE_1POLE_18dB = 0x2,
			VMixFilterSlope_t_FILTER_SLOPE_1POLE_24dB = 0x3,
			VMixFilterSlope_t_FILTER_SLOPE_1POLE_6dB = 0x0,
			VMixFilterSlope_t_FILTER_SLOPE_24dB = 0x5,
			VMixFilterSlope_t_FILTER_SLOPE_36dB = 0x6,
			VMixFilterSlope_t_FILTER_SLOPE_48dB = 0x7,
			VMixFilterSlope_t_FILTER_SLOPE_MAX = 0x7
		};

enum soundsystem_lowlevel_VMixPannerType_t : uint32_t {
			VMixPannerType_t_PANNER_TYPE_EQUAL_POWER = 0x1,
			VMixPannerType_t_PANNER_TYPE_LINEAR = 0x0
		};

enum soundsystem_lowlevel_VMixSubgraphSwitchInterpolationType_t : uint32_t {
			VMixSubgraphSwitchInterpolationType_t_SUBGRAPH_INTERPOLATION_KEEP_LAST_SUBGRAPH_RUNNING = 0x2,
			VMixSubgraphSwitchInterpolationType_t_SUBGRAPH_INTERPOLATION_TEMPORAL_CROSSFADE = 0x0,
			VMixSubgraphSwitchInterpolationType_t_SUBGRAPH_INTERPOLATION_TEMPORAL_FADE_OUT = 0x1
		};

enum soundsystem_lowlevel_VMixChannelOperation_t : uint32_t {
			VMixChannelOperation_t_VMIX_CHAN_LEFT = 0x1,
			VMixChannelOperation_t_VMIX_CHAN_MID_SIDE = 0x5,
			VMixChannelOperation_t_VMIX_CHAN_MONO = 0x4,
			VMixChannelOperation_t_VMIX_CHAN_RIGHT = 0x2,
			VMixChannelOperation_t_VMIX_CHAN_STEREO = 0x0,
			VMixChannelOperation_t_VMIX_CHAN_SWAP = 0x3
		};

enum worldrenderer_ObjectTypeFlags_t : uint32_t {
			ObjectTypeFlags_t_OBJECT_TYPE_BAKED_GEOMETRY = 0x20000,
			ObjectTypeFlags_t_OBJECT_TYPE_BLOCK_LIGHT = 0x10,
			ObjectTypeFlags_t_OBJECT_TYPE_DISABLED_IN_LOW_QUALITY = 0x80,
			ObjectTypeFlags_t_OBJECT_TYPE_DISABLE_VIS_CULLING = 0x10000,
			ObjectTypeFlags_t_OBJECT_TYPE_MODEL = 0x8,
			ObjectTypeFlags_t_OBJECT_TYPE_MODEL_HAS_LODS = 0x800,
			ObjectTypeFlags_t_OBJECT_TYPE_NONE = 0x0,
			ObjectTypeFlags_t_OBJECT_TYPE_NO_SHADOWS = 0x20,
			ObjectTypeFlags_t_OBJECT_TYPE_NO_SUN_SHADOWS = 0x100,
			ObjectTypeFlags_t_OBJECT_TYPE_OVERLAY = 0x2000,
			ObjectTypeFlags_t_OBJECT_TYPE_PRECOMPUTED_VISMEMBERS = 0x4000,
			ObjectTypeFlags_t_OBJECT_TYPE_RENDER_TO_CUBEMAPS = 0x400,
			ObjectTypeFlags_t_OBJECT_TYPE_RENDER_WITH_DYNAMIC = 0x200,
			ObjectTypeFlags_t_OBJECT_TYPE_STATIC_CUBE_MAP = 0x8000,
			ObjectTypeFlags_t_OBJECT_TYPE_WORLDSPACE_TEXURE_BLEND = 0x40
		};

enum worldrenderer_AggregateInstanceStream_t : uint8_t {
			AggregateInstanceStream_t_AGGREGATE_INSTANCE_STREAM_LIGHTMAPUV_UNORM16 = 0x1,
			AggregateInstanceStream_t_AGGREGATE_INSTANCE_STREAM_NONE = 0x0,
			AggregateInstanceStream_t_AGGREGATE_INSTANCE_STREAM_VERTEXBLEND_UNORM8 = 0x4,
			AggregateInstanceStream_t_AGGREGATE_INSTANCE_STREAM_VERTEXTINT_UNORM8 = 0x2
		};

enum modellib_MeshDrawPrimitiveFlags_t : uint32_t {
			MeshDrawPrimitiveFlags_t_MESH_DRAW_FLAGS_CAN_BATCH_WITH_DYNAMIC_SHADER_CONSTANTS = 0x40,
			MeshDrawPrimitiveFlags_t_MESH_DRAW_FLAGS_DRAW_LAST = 0x80,
			MeshDrawPrimitiveFlags_t_MESH_DRAW_FLAGS_NONE = 0x0,
			MeshDrawPrimitiveFlags_t_MESH_DRAW_FLAGS_USE_COMPRESSED_NORMAL_TANGENT = 0x2,
			MeshDrawPrimitiveFlags_t_MESH_DRAW_FLAGS_USE_COMPRESSED_PER_VERTEX_LIGHTING = 0x10,
			MeshDrawPrimitiveFlags_t_MESH_DRAW_FLAGS_USE_SHADOW_FAST_PATH = 0x1,
			MeshDrawPrimitiveFlags_t_MESH_DRAW_FLAGS_USE_UNCOMPRESSED_PER_VERTEX_LIGHTING = 0x20,
			MeshDrawPrimitiveFlags_t_MESH_DRAW_INPUT_LAYOUT_IS_NOT_MATCHED_TO_MATERIAL = 0x8
		};

enum toolscene_LightRigType_t : uint32_t {
			LightRigType_t_MATERIAL_THUMBNAIL = 0x2,
			LightRigType_t_NUM_TYPES = 0x3,
			LightRigType_t_PREVIEW = 0x0,
			LightRigType_t_THUMBNAIL = 0x1
		};

enum smartprops_SmartPropDetailFadeLevel_t : uint32_t {
			SmartPropDetailFadeLevel_t_LEAST_AGGRESSIVE = 0x5,
			SmartPropDetailFadeLevel_t_LESS_AGGRESSIVE = 0x4,
			SmartPropDetailFadeLevel_t_MORE_AGGRESSIVE = 0x2,
			SmartPropDetailFadeLevel_t_MOST_AGGRESSIVE = 0x1,
			SmartPropDetailFadeLevel_t_NONE = 0x0,
			SmartPropDetailFadeLevel_t_NORMAL = 0x3
		};

enum smartprops_SmartPropDeformableAttachMode_t : uint32_t {
			SmartPropDeformableAttachMode_t_RELATIVE = 0x0,
			SmartPropDeformableAttachMode_t_SNAP = 0x1,
			SmartPropDeformableAttachMode_t_STIFFEN = 0x2
		};

enum smartprops_SmartPropDeformableOrientMode_t : uint32_t {
			SmartPropDeformableOrientMode_t_BACKWARD_NORMAL = 0x3,
			SmartPropDeformableOrientMode_t_FORWARD_NORMAL = 0x1,
			SmartPropDeformableOrientMode_t_MAINTAIN_OFFSET = 0x4,
			SmartPropDeformableOrientMode_t_NONE = 0x0,
			SmartPropDeformableOrientMode_t_UP_NORMAL = 0x2
		};

enum smartprops_ConfigurationHandleShape_t : uint32_t {
			ConfigurationHandleShape_t_CIRCLE = 0x2,
			ConfigurationHandleShape_t_DIAMOND = 0x3,
			ConfigurationHandleShape_t_NONE = 0x0,
			ConfigurationHandleShape_t_SQUARE = 0x1
		};

enum smartprops_ApplyColorMode_t : uint32_t {
			ApplyColorMode_t_MULTIPLY_CURRENT = 0x1,
			ApplyColorMode_t_MULTIPLY_OBJECT = 0x0,
			ApplyColorMode_t_REPLACE = 0x2
		};

enum smartprops_SmartPropChoiceSelectionMode_t : uint32_t {
			SmartPropChoiceSelectionMode_t_FIRST = 0x1,
			SmartPropChoiceSelectionMode_t_RANDOM = 0x0,
			SmartPropChoiceSelectionMode_t_SPECIFIC = 0x2
		};

enum smartprops_SmartPropColorSelectionMode_t : uint32_t {
			SmartPropColorSelectionMode_t_GRADIENT_LOCATION = 0x3,
			SmartPropColorSelectionMode_t_GRADIENT_RANDOM = 0x1,
			SmartPropColorSelectionMode_t_GRADIENT_RANDOM_STOP = 0x2,
			SmartPropColorSelectionMode_t_SPECIFIC_COLOR = 0x0
		};

enum smartprops_SmartPropSpace_t : uint32_t {
			SmartPropSpace_t_ELEMENT = 0x2,
			SmartPropSpace_t_OBJECT = 0x1,
			SmartPropSpace_t_WORLD = 0x0
		};

enum smartprops_SmartPropDirection_t : uint32_t {
			SmartPropDirection_t_FORWARD = 0x0,
			SmartPropDirection_t_LEFT = 0x1,
			SmartPropDirection_t_UP = 0x2
		};

enum smartprops_SmartPropDistributionMode_t : uint32_t {
			SmartPropDistributionMode_t_RANDOM = 0x0,
			SmartPropDistributionMode_t_REGULAR = 0x1
		};

enum smartprops_SmartPropGridOriginBasis_t : uint32_t {
			SmartPropGridOriginBasis_t_CENTER = 0x0,
			SmartPropGridOriginBasis_t_CORNER = 0x1
		};

enum smartprops_SmartPropGridPlacementMode_t : uint32_t {
			SmartPropGridPlacementMode_t_FILL = 0x1,
			SmartPropGridPlacementMode_t_SEGMENT = 0x0
		};

enum smartprops_SmartPropPathPositions_t : uint32_t {
			SmartPropPathPositions_t_ALL = 0x0,
			SmartPropPathPositions_t_CONTROL_POINTS = 0x3,
			SmartPropPathPositions_t_NTH = 0x1,
			SmartPropPathPositions_t_START_AND_END = 0x2
		};

enum smartprops_PickMode_t : uint32_t {
			PickMode_t_ALL_IN_ORDER = 0x2,
			PickMode_t_LARGEST_FIRST = 0x0,
			PickMode_t_RANDOM = 0x1
		};

enum smartprops_SmartPropRadiusPlacementMode_t : uint32_t {
			SmartPropRadiusPlacementMode_t_CIRCLE = 0x1,
			SmartPropRadiusPlacementMode_t_SPHERE = 0x0
		};

enum smartprops_ScaleMode_t : uint32_t {
			ScaleMode_t_NONE = 0x0,
			ScaleMode_t_SCALE_END_TO_FIT = 0x1,
			ScaleMode_t_SCALE_EQUALLY = 0x2,
			ScaleMode_t_SCALE_MAXIMIZE = 0x3
		};

enum smartprops_TraceNoHitResult_t : uint32_t {
			TraceNoHitResult_t_DISCARD = 0x1,
			TraceNoHitResult_t_MOVE_TO_END = 0x3,
			TraceNoHitResult_t_MOVE_TO_START = 0x2,
			TraceNoHitResult_t_NOTHING = 0x0
		};

enum mathlib_extended_FuseVariableType_t : uint8_t {
			FuseVariableType_t_BOOL = 0x1,
			FuseVariableType_t_FLOAT32 = 0x8,
			FuseVariableType_t_INT16 = 0x3,
			FuseVariableType_t_INT32 = 0x4,
			FuseVariableType_t_INT8 = 0x2,
			FuseVariableType_t_INVALID = 0x0,
			FuseVariableType_t_UINT16 = 0x6,
			FuseVariableType_t_UINT32 = 0x7,
			FuseVariableType_t_UINT8 = 0x5
		};

enum mathlib_extended_FuseVariableAccess_t : uint8_t {
			FuseVariableAccess_t_READ_ONLY = 0x1,
			FuseVariableAccess_t_WRITABLE = 0x0
		};

enum compositematerialslib_CompMatPropertyMutatorConditionType_t : uint32_t {
			CompMatPropertyMutatorConditionType_t_COMP_MAT_MUTATOR_CONDITION_INPUT_CONTAINER_EXISTS = 0x0,
			CompMatPropertyMutatorConditionType_t_COMP_MAT_MUTATOR_CONDITION_INPUT_CONTAINER_VALUE_EQUALS = 0x2,
			CompMatPropertyMutatorConditionType_t_COMP_MAT_MUTATOR_CONDITION_INPUT_CONTAINER_VALUE_EXISTS = 0x1
		};

enum compositematerialslib_CompMatPropertyMutatorType_t : uint32_t {
			CompMatPropertyMutatorType_t_COMP_MAT_PROPERTY_MUTATOR_CONDITIONAL_MUTATORS = 0x6,
			CompMatPropertyMutatorType_t_COMP_MAT_PROPERTY_MUTATOR_COPY_KEYS_WITH_SUFFIX = 0x2,
			CompMatPropertyMutatorType_t_COMP_MAT_PROPERTY_MUTATOR_COPY_MATCHING_KEYS = 0x1,
			CompMatPropertyMutatorType_t_COMP_MAT_PROPERTY_MUTATOR_COPY_PROPERTY = 0x3,
			CompMatPropertyMutatorType_t_COMP_MAT_PROPERTY_MUTATOR_DRAW_TEXT = 0x8,
			CompMatPropertyMutatorType_t_COMP_MAT_PROPERTY_MUTATOR_GENERATE_TEXTURE = 0x5,
			CompMatPropertyMutatorType_t_COMP_MAT_PROPERTY_MUTATOR_INIT = 0x0,
			CompMatPropertyMutatorType_t_COMP_MAT_PROPERTY_MUTATOR_POP_INPUT_QUEUE = 0x7,
			CompMatPropertyMutatorType_t_COMP_MAT_PROPERTY_MUTATOR_RANDOM_ROLL_INPUT_VARIABLES = 0x9,
			CompMatPropertyMutatorType_t_COMP_MAT_PROPERTY_MUTATOR_SET_VALUE = 0x4
		};

enum compositematerialslib_CompositeMaterialInputLooseVariableType_t : uint32_t {
			CompositeMaterialInputLooseVariableType_t_LOOSE_VARIABLE_TYPE_BOOLEAN = 0x0,
			CompositeMaterialInputLooseVariableType_t_LOOSE_VARIABLE_TYPE_COLOR4 = 0x9,
			CompositeMaterialInputLooseVariableType_t_LOOSE_VARIABLE_TYPE_FLOAT1 = 0x5,
			CompositeMaterialInputLooseVariableType_t_LOOSE_VARIABLE_TYPE_FLOAT2 = 0x6,
			CompositeMaterialInputLooseVariableType_t_LOOSE_VARIABLE_TYPE_FLOAT3 = 0x7,
			CompositeMaterialInputLooseVariableType_t_LOOSE_VARIABLE_TYPE_FLOAT4 = 0x8,
			CompositeMaterialInputLooseVariableType_t_LOOSE_VARIABLE_TYPE_INTEGER1 = 0x1,
			CompositeMaterialInputLooseVariableType_t_LOOSE_VARIABLE_TYPE_INTEGER2 = 0x2,
			CompositeMaterialInputLooseVariableType_t_LOOSE_VARIABLE_TYPE_INTEGER3 = 0x3,
			CompositeMaterialInputLooseVariableType_t_LOOSE_VARIABLE_TYPE_INTEGER4 = 0x4,
			CompositeMaterialInputLooseVariableType_t_LOOSE_VARIABLE_TYPE_PANORAMA_RENDER = 0xe,
			CompositeMaterialInputLooseVariableType_t_LOOSE_VARIABLE_TYPE_RESOURCE_MATERIAL = 0xc,
			CompositeMaterialInputLooseVariableType_t_LOOSE_VARIABLE_TYPE_RESOURCE_TEXTURE = 0xd,
			CompositeMaterialInputLooseVariableType_t_LOOSE_VARIABLE_TYPE_STRING = 0xa,
			CompositeMaterialInputLooseVariableType_t_LOOSE_VARIABLE_TYPE_SYSTEMVAR = 0xb
		};

enum compositematerialslib_CompositeMaterialVarSystemVar_t : uint32_t {
			CompositeMaterialVarSystemVar_t_COMPMATSYSVAR_COMPOSITETIME = 0x0,
			CompositeMaterialVarSystemVar_t_COMPMATSYSVAR_EMPTY_RESOURCE_SPACER = 0x1
		};

enum compositematerialslib_CompositeMaterialInputTextureType_t : uint32_t {
			CompositeMaterialInputTextureType_t_INPUT_TEXTURE_TYPE_AO = 0x6,
			CompositeMaterialInputTextureType_t_INPUT_TEXTURE_TYPE_COLOR = 0x2,
			CompositeMaterialInputTextureType_t_INPUT_TEXTURE_TYPE_DEFAULT = 0x0,
			CompositeMaterialInputTextureType_t_INPUT_TEXTURE_TYPE_MASKS = 0x3,
			CompositeMaterialInputTextureType_t_INPUT_TEXTURE_TYPE_NORMALMAP = 0x1,
			CompositeMaterialInputTextureType_t_INPUT_TEXTURE_TYPE_PEARLESCENCE_MASK = 0x5,
			CompositeMaterialInputTextureType_t_INPUT_TEXTURE_TYPE_POSITION = 0x7,
			CompositeMaterialInputTextureType_t_INPUT_TEXTURE_TYPE_ROUGHNESS = 0x4
		};

enum compositematerialslib_CompositeMaterialInputContainerSourceType_t : uint32_t {
			CompositeMaterialInputContainerSourceType_t_CONTAINER_SOURCE_TYPE_LOOSE_VARIABLES = 0x3,
			CompositeMaterialInputContainerSourceType_t_CONTAINER_SOURCE_TYPE_MATERIAL_FROM_TARGET_ATTR = 0x1,
			CompositeMaterialInputContainerSourceType_t_CONTAINER_SOURCE_TYPE_SPECIFIC_MATERIAL = 0x2,
			CompositeMaterialInputContainerSourceType_t_CONTAINER_SOURCE_TYPE_TARGET_INSTANCE_MATERIAL = 0x5,
			CompositeMaterialInputContainerSourceType_t_CONTAINER_SOURCE_TYPE_TARGET_MATERIAL = 0x0,
			CompositeMaterialInputContainerSourceType_t_CONTAINER_SOURCE_TYPE_VARIABLE_FROM_TARGET_ATTR = 0x4
		};

enum compositematerialslib_CompositeMaterialMatchFilterType_t : uint32_t {
			CompositeMaterialMatchFilterType_t_MATCH_FILTER_MATERIAL_ATTRIBUTE_EQUALS = 0x3,
			CompositeMaterialMatchFilterType_t_MATCH_FILTER_MATERIAL_ATTRIBUTE_EXISTS = 0x0,
			CompositeMaterialMatchFilterType_t_MATCH_FILTER_MATERIAL_NAME_SUBSTR = 0x2,
			CompositeMaterialMatchFilterType_t_MATCH_FILTER_MATERIAL_PROPERTY_EQUALS = 0x5,
			CompositeMaterialMatchFilterType_t_MATCH_FILTER_MATERIAL_PROPERTY_EXISTS = 0x4,
			CompositeMaterialMatchFilterType_t_MATCH_FILTER_MATERIAL_SHADER = 0x1
		};

enum client_ScriptState_t : uint32_t {
			ScriptState_t_SCRIPT_CLEANUP = 0x3,
			ScriptState_t_SCRIPT_MOVE_TO_MARK = 0x4,
			ScriptState_t_SCRIPT_PLAYING = 0x0,
			ScriptState_t_SCRIPT_POST_IDLE = 0x2,
			ScriptState_t_SCRIPT_WAIT = 0x1
		};

enum client_ChoreoState_t : uint32_t {
			ChoreoState_t_STATE_PLAY_SCRIPT = 0x4,
			ChoreoState_t_STATE_PLAY_SCRIPT_POST_IDLE = 0x5,
			ChoreoState_t_STATE_PLAY_SCRIPT_POST_IDLE_DONE = 0x6,
			ChoreoState_t_STATE_PRE_SCRIPT = 0x0,
			ChoreoState_t_STATE_SYNCHRONIZE_SCRIPT = 0x3,
			ChoreoState_t_STATE_WAIT_FOR_SCRIPT = 0x1,
			ChoreoState_t_STATE_WALK_TO_MARK = 0x2
		};

enum client_ForcedCrouchState_t : uint32_t {
			ForcedCrouchState_t_FORCEDCROUCH_CROUCHED = 0x1,
			ForcedCrouchState_t_FORCEDCROUCH_NONE = 0x0,
			ForcedCrouchState_t_FORCEDCROUCH_UNCROUCHED = 0x2
		};

enum client_ChatIgnoreType_t : uint32_t {
			ChatIgnoreType_t_CHAT_IGNORE_ALL = 0x1,
			ChatIgnoreType_t_CHAT_IGNORE_NONE = 0x0,
			ChatIgnoreType_t_CHAT_IGNORE_TEAM = 0x2
		};

enum server_RelativeLocationType_t : uint8_t {
			RelativeLocationType_t_RELATIVE_TO_ENTITY_IN_LOCAL_SPACE = 0x1,
			RelativeLocationType_t_RELATIVE_TO_ENTITY_IN_WORLD_SPACE = 0x3,
			RelativeLocationType_t_RELATIVE_TO_ENTITY_YAW_ONLY = 0x2,
			RelativeLocationType_t_WORLD_SPACE_POSITION = 0x0
		};

enum client_ShatterGlassStressType : uint8_t {
			ShatterGlassStressType_SHATTERGLASS_BALLISTIC = 0x1,
			ShatterGlassStressType_SHATTERGLASS_BLUNT = 0x0,
			ShatterGlassStressType_SHATTERGLASS_EXPLOSIVE = 0x3,
			ShatterGlassStressType_SHATTERGLASS_PULSE = 0x2
		};

enum client_OnFrame : uint8_t {
			OnFrame_ONFRAME_FALSE = 0x2,
			OnFrame_ONFRAME_TRUE = 0x1,
			OnFrame_ONFRAME_UNKNOWN = 0x0
		};

enum server_SimpleConstraintsSoundProfileKeypoints_t : uint32_t {
			SimpleConstraintsSoundProfileKeypoints_t_kHIGHWATER = 0x2,
			SimpleConstraintsSoundProfileKeypoints_t_kMIN_FULL = 0x1,
			SimpleConstraintsSoundProfileKeypoints_t_kMIN_THRESHOLD = 0x0
		};

enum modellib_ScriptedMoveTo_t : uint32_t {
			ScriptedMoveTo_t_eMoveWithGait = 0x3,
			ScriptedMoveTo_t_eObsoleteBackCompat1 = 0x1,
			ScriptedMoveTo_t_eObsoleteBackCompat2 = 0x2,
			ScriptedMoveTo_t_eTeleport = 0x4,
			ScriptedMoveTo_t_eWait = 0x0,
			ScriptedMoveTo_t_eWaitFacing = 0x5
		};

enum modellib_SharedMovementGait_t : uint8_t {
			SharedMovementGait_t_eCount = 0x4,
			SharedMovementGait_t_eFast = 0x2,
			SharedMovementGait_t_eInvalid = 0xff,
			SharedMovementGait_t_eMedium = 0x1,
			SharedMovementGait_t_eSlow = 0x0,
			SharedMovementGait_t_eVeryFast = 0x3
		};

enum modellib_ScriptedHeldWeaponBehavior_t : uint32_t {
			ScriptedHeldWeaponBehavior_t_eDeploy = 0x1,
			ScriptedHeldWeaponBehavior_t_eDrop = 0x2,
			ScriptedHeldWeaponBehavior_t_eHolster = 0x0,
			ScriptedHeldWeaponBehavior_t_eInvalid = 0xffffffff
		};

enum client_Class_T : uint32_t {
			Class_T_CLASS_C4_FOR_RADAR = 0x3,
			Class_T_CLASS_DOOR = 0xb,
			Class_T_CLASS_FOOT_CONTACT_SHADOW = 0x4,
			Class_T_CLASS_HUDMODEL_ADDON = 0x9,
			Class_T_CLASS_HUDMODEL_ARMS = 0x8,
			Class_T_CLASS_HUDMODEL_WEAPON = 0x7,
			Class_T_CLASS_NONE = 0x0,
			Class_T_CLASS_PLANTED_C4 = 0xc,
			Class_T_CLASS_PLAYER = 0x1,
			Class_T_CLASS_PLAYER_ALLY = 0x2,
			Class_T_CLASS_WATER_SPLASHER = 0x6,
			Class_T_CLASS_WEAPON = 0x5,
			Class_T_CLASS_WORLDMODEL_GLOVES = 0xa,
			Class_T_NUM_CLASSIFY_CLASSES = 0xd
		};

enum client_Disposition_t : uint32_t {
			Disposition_t_D_ER = 0x0,
			Disposition_t_D_ERROR = 0x0,
			Disposition_t_D_FEAR = 0x2,
			Disposition_t_D_FR = 0x2,
			Disposition_t_D_HATE = 0x1,
			Disposition_t_D_HT = 0x1,
			Disposition_t_D_LI = 0x3,
			Disposition_t_D_LIKE = 0x3,
			Disposition_t_D_NEUTRAL = 0x4,
			Disposition_t_D_NU = 0x4
		};

enum server_RotatorTargetSpace_t : uint32_t {
			RotatorTargetSpace_t_ROTATOR_TARGET_LOCALSPACE = 0x1,
			RotatorTargetSpace_t_ROTATOR_TARGET_WORLDSPACE = 0x0
		};

enum soundsystem_soundlevel_t : uint32_t {
			soundlevel_t_SNDLVL_100dB = 0x64,
			soundlevel_t_SNDLVL_105dB = 0x69,
			soundlevel_t_SNDLVL_110dB = 0x6e,
			soundlevel_t_SNDLVL_120dB = 0x78,
			soundlevel_t_SNDLVL_130dB = 0x82,
			soundlevel_t_SNDLVL_140dB = 0x8c,
			soundlevel_t_SNDLVL_150dB = 0x96,
			soundlevel_t_SNDLVL_180dB = 0xb4,
			soundlevel_t_SNDLVL_20dB = 0x14,
			soundlevel_t_SNDLVL_25dB = 0x19,
			soundlevel_t_SNDLVL_30dB = 0x1e,
			soundlevel_t_SNDLVL_35dB = 0x23,
			soundlevel_t_SNDLVL_40dB = 0x28,
			soundlevel_t_SNDLVL_45dB = 0x2d,
			soundlevel_t_SNDLVL_50dB = 0x32,
			soundlevel_t_SNDLVL_55dB = 0x37,
			soundlevel_t_SNDLVL_60dB = 0x3c,
			soundlevel_t_SNDLVL_65dB = 0x41,
			soundlevel_t_SNDLVL_70dB = 0x46,
			soundlevel_t_SNDLVL_75dB = 0x4b,
			soundlevel_t_SNDLVL_80dB = 0x50,
			soundlevel_t_SNDLVL_85dB = 0x55,
			soundlevel_t_SNDLVL_90dB = 0x5a,
			soundlevel_t_SNDLVL_95dB = 0x5f,
			soundlevel_t_SNDLVL_GUNFIRE = 0x8c,
			soundlevel_t_SNDLVL_IDLE = 0x3c,
			soundlevel_t_SNDLVL_NONE = 0x0,
			soundlevel_t_SNDLVL_NORM = 0x4b,
			soundlevel_t_SNDLVL_STATIC = 0x42,
			soundlevel_t_SNDLVL_TALKING = 0x50
		};

enum server_TOGGLE_STATE : uint32_t {
			TOGGLE_STATE_DOOR_CLOSED = 0x1,
			TOGGLE_STATE_DOOR_CLOSING = 0x3,
			TOGGLE_STATE_DOOR_OPEN = 0x0,
			TOGGLE_STATE_DOOR_OPENING = 0x2,
			TOGGLE_STATE_TS_AT_BOTTOM = 0x1,
			TOGGLE_STATE_TS_AT_TOP = 0x0,
			TOGGLE_STATE_TS_GOING_DOWN = 0x3,
			TOGGLE_STATE_TS_GOING_UP = 0x2
		};

enum client_Hull_t : uint32_t {
			Hull_t_HULL_HUMAN = 0x0,
			Hull_t_HULL_LARGE = 0x6,
			Hull_t_HULL_LARGE_CENTERED = 0x7,
			Hull_t_HULL_MEDIUM = 0x4,
			Hull_t_HULL_MEDIUM_TALL = 0x8,
			Hull_t_HULL_NONE = 0xb,
			Hull_t_HULL_SMALL = 0x9,
			Hull_t_HULL_SMALL_CENTERED = 0x1,
			Hull_t_HULL_TINY = 0x3,
			Hull_t_HULL_TINY_CENTERED = 0x5,
			Hull_t_HULL_WIDE_HUMAN = 0x2,
			Hull_t_NUM_HULLS = 0xa
		};

enum server_FuncDoorSpawnPos_t : uint32_t {
			FuncDoorSpawnPos_t_FUNC_DOOR_SPAWN_CLOSED = 0x0,
			FuncDoorSpawnPos_t_FUNC_DOOR_SPAWN_OPEN = 0x1
		};

enum server_Materials : uint32_t {
			Materials_matCeilingTile = 0x5,
			Materials_matCinderBlock = 0x4,
			Materials_matComputer = 0x6,
			Materials_matFlesh = 0x3,
			Materials_matGlass = 0x0,
			Materials_matLastMaterial = 0xb,
			Materials_matMetal = 0x2,
			Materials_matNone = 0xa,
			Materials_matRocks = 0x8,
			Materials_matUnbreakableGlass = 0x7,
			Materials_matWeb = 0x9,
			Materials_matWood = 0x1
		};

enum server_Explosions : uint32_t {
			Explosions_expDirected = 0x1,
			Explosions_expRandom = 0x0,
			Explosions_expUsePrecise = 0x2
		};

enum server_EOverrideBlockLOS_t : uint32_t {
			EOverrideBlockLOS_t_BLOCK_LOS_DEFAULT = 0x0,
			EOverrideBlockLOS_t_BLOCK_LOS_FORCE_FALSE = 0x1,
			EOverrideBlockLOS_t_BLOCK_LOS_FORCE_TRUE = 0x2
		};

enum server_ChickenActivity : uint32_t {
			ChickenActivity_FEED = 0x9,
			ChickenActivity_GLIDE = 0x4,
			ChickenActivity_IDLE = 0x0,
			ChickenActivity_LAND = 0x5,
			ChickenActivity_PANIC = 0x6,
			ChickenActivity_RUN = 0x3,
			ChickenActivity_SLEEP = 0xa,
			ChickenActivity_SQUAT = 0x1,
			ChickenActivity_TRICK = 0x7,
			ChickenActivity_TURN_IN_PLACE = 0x8,
			ChickenActivity_WALK = 0x2
		};

enum server_Touch_t : uint32_t {
			Touch_t_touch_none = 0x0,
			Touch_t_touch_npc_only = 0x2,
			Touch_t_touch_player_only = 0x1,
			Touch_t_touch_player_or_npc = 0x3,
			Touch_t_touch_player_or_npc_or_physicsprop = 0x4
		};

enum client_BrushSolidities_e : uint32_t {
			BrushSolidities_e_BRUSHSOLID_ALWAYS = 0x2,
			BrushSolidities_e_BRUSHSOLID_NEVER = 0x1,
			BrushSolidities_e_BRUSHSOLID_TOGGLE = 0x0
		};

enum server_MoveLinearAuthoredPos_t : uint32_t {
			MoveLinearAuthoredPos_t_MOVELINEAR_AUTHORED_AT_CLOSED_POSITION = 0x2,
			MoveLinearAuthoredPos_t_MOVELINEAR_AUTHORED_AT_OPEN_POSITION = 0x1,
			MoveLinearAuthoredPos_t_MOVELINEAR_AUTHORED_AT_START_POSITION = 0x0
		};

enum server_Move_t : uint32_t {
			Move_t_MOVE_LOOP = 0x0,
			Move_t_MOVE_OSCILLATE = 0x1,
			Move_t_MOVE_STOP_AT_END = 0x2
		};

enum server_OrientationUpdate_t : uint32_t {
			OrientationUpdate_t_ORIENTATION_FACE_ENTITY = 0x8,
			OrientationUpdate_t_ORIENTATION_FACE_PLAYER = 0x5,
			OrientationUpdate_t_ORIENTATION_FIXED = 0x4,
			OrientationUpdate_t_ORIENTATION_FORWARD_MOVEMENT_DIRECTION = 0x6,
			OrientationUpdate_t_ORIENTATION_FORWARD_MOVEMENT_DIRECTION_AND_UP_CONTROL_POINT = 0x7,
			OrientationUpdate_t_ORIENTATION_FORWARD_PATH = 0x0,
			OrientationUpdate_t_ORIENTATION_FORWARD_PATH_AND_FIXED_PITCH = 0x1,
			OrientationUpdate_t_ORIENTATION_FORWARD_PATH_AND_UP_CONTROL_POINT = 0x2,
			OrientationUpdate_t_ORIENTATION_MATCH_CONTROL_POINT = 0x3
		};

enum server_TransitionToPathNodeAction_t : uint32_t {
			TransitionToPathNodeAction_t_TRANSITION_TO_PATH_NODE_ACTION_NONE = 0x0,
			TransitionToPathNodeAction_t_TRANSITION_TO_PATH_NODE_ACTION_START_FORWARD = 0x1,
			TransitionToPathNodeAction_t_TRANSITION_TO_PATH_NODE_ACTION_START_REVERSE = 0x2,
			TransitionToPathNodeAction_t_TRANSITION_TO_PATH_NODE_TRANSITIONING = 0x3
		};

enum server_FollowEntityDirection_t : uint32_t {
			FollowEntityDirection_t_FOLLOW_ENTITY_BIDIRECTIONAL = 0x0,
			FollowEntityDirection_t_FOLLOW_ENTITY_FORWARD = 0x1,
			FollowEntityDirection_t_FOLLOW_ENTITY_REVERSE = 0x2
		};

enum server_Rotate_t : uint32_t {
			Rotate_t_ROTATE_LOOK_AT_TARGET = 0x3,
			Rotate_t_ROTATE_LOOP = 0x0,
			Rotate_t_ROTATE_OSCILLATE = 0x1,
			Rotate_t_ROTATE_RETURN_TO_INITIAL_ORIENTATION = 0x4,
			Rotate_t_ROTATE_STOP_AT_END = 0x2
		};

enum server_TrainOrientationType_t : uint32_t {
			TrainOrientationType_t_TrainOrientation_AtPathTracks = 0x1,
			TrainOrientationType_t_TrainOrientation_EaseInEaseOut = 0x3,
			TrainOrientationType_t_TrainOrientation_Fixed = 0x0,
			TrainOrientationType_t_TrainOrientation_LinearBlend = 0x2
		};

enum server_TrainVelocityType_t : uint32_t {
			TrainVelocityType_t_TrainVelocity_EaseInEaseOut = 0x2,
			TrainVelocityType_t_TrainVelocity_Instantaneous = 0x0,
			TrainVelocityType_t_TrainVelocity_LinearBlend = 0x1
		};

enum server_TRAIN_CODE : uint32_t {
			TRAIN_CODE_TRAIN_BLOCKING = 0x1,
			TRAIN_CODE_TRAIN_FOLLOWING = 0x2,
			TRAIN_CODE_TRAIN_SAFE = 0x0
		};

enum server_TrackOrientationType_t : uint32_t {
			TrackOrientationType_t_TrackOrientation_FacePath = 0x1,
			TrackOrientationType_t_TrackOrientation_FacePathAngles = 0x2,
			TrackOrientationType_t_TrackOrientation_Fixed = 0x0
		};

enum physicslib_JointMotion_t : uint32_t {
			JointMotion_t_JOINT_MOTION_COUNT = 0x2,
			JointMotion_t_JOINT_MOTION_FREE = 0x0,
			JointMotion_t_JOINT_MOTION_LOCKED = 0x1
		};

enum server_SceneOnPlayerDeath_t : uint32_t {
			SceneOnPlayerDeath_t_SCENE_ONPLAYERDEATH_CANCEL = 0x1,
			SceneOnPlayerDeath_t_SCENE_ONPLAYERDEATH_DO_NOTHING = 0x0
		};

enum server_LogicBranchListenerLastState_t : uint32_t {
			LogicBranchListenerLastState_t_LOGIC_BRANCH_LISTENER_ALL_FALSE = 0x2,
			LogicBranchListenerLastState_t_LOGIC_BRANCH_LISTENER_ALL_TRUE = 0x1,
			LogicBranchListenerLastState_t_LOGIC_BRANCH_LISTENER_MIXED = 0x3,
			LogicBranchListenerLastState_t_LOGIC_BRANCH_LISTENER_NOT_INIT = 0x0
		};

enum server_navproperties_t : uint32_t {
			navproperties_t_NAV_IGNORE = 0x1
		};

enum server_NavScopeFlags_t : uint8_t {
			NavScopeFlags_t_eAir = 0x2,
			NavScopeFlags_t_eAll = 0x3,
			NavScopeFlags_t_eGround = 0x1,
			NavScopeFlags_t_eNone = 0x0
		};

enum server_HoverPoseFlags_t : uint8_t {
			HoverPoseFlags_t_eAngles = 0x2,
			HoverPoseFlags_t_eNone = 0x0,
			HoverPoseFlags_t_ePosition = 0x1
		};

enum server_CrateType_t : uint32_t {
			CrateType_t_CRATE_SPECIFIC_ITEM = 0x0,
			CrateType_t_CRATE_TYPE_COUNT = 0x1
		};

enum server_EntFinderMethod_t : uint32_t {
			EntFinderMethod_t_ENT_FIND_METHOD_FARTHEST = 0x1,
			EntFinderMethod_t_ENT_FIND_METHOD_NEAREST = 0x0,
			EntFinderMethod_t_ENT_FIND_METHOD_RANDOM = 0x2
		};

enum server_PropDoorRotatingSpawnPos_t : uint32_t {
			PropDoorRotatingSpawnPos_t_DOOR_SPAWN_AJAR = 0x3,
			PropDoorRotatingSpawnPos_t_DOOR_SPAWN_CLOSED = 0x0,
			PropDoorRotatingSpawnPos_t_DOOR_SPAWN_OPEN_BACK = 0x2,
			PropDoorRotatingSpawnPos_t_DOOR_SPAWN_OPEN_FORWARD = 0x1
		};

enum server_PropDoorRotatingOpenDirection_e : uint32_t {
			PropDoorRotatingOpenDirection_e_DOOR_ROTATING_OPEN_BACKWARD = 0x2,
			PropDoorRotatingOpenDirection_e_DOOR_ROTATING_OPEN_BOTH_WAYS = 0x0,
			PropDoorRotatingOpenDirection_e_DOOR_ROTATING_OPEN_FORWARD = 0x1
		};

enum server_SoundEventStartType_t : uint32_t {
			SoundEventStartType_t_SOUNDEVENT_START_ENTITY = 0x2,
			SoundEventStartType_t_SOUNDEVENT_START_PLAYER = 0x0,
			SoundEventStartType_t_SOUNDEVENT_START_WORLD = 0x1
		};

enum client_ScriptedOnDeath_t : uint32_t {
			ScriptedOnDeath_t_SS_ONDEATH_ANIMATED_DEATH = 0x2,
			ScriptedOnDeath_t_SS_ONDEATH_NOT_APPLICABLE = 0xffffffff,
			ScriptedOnDeath_t_SS_ONDEATH_RAGDOLL = 0x1,
			ScriptedOnDeath_t_SS_ONDEATH_UNDEFINED = 0x0
		};

enum server_ScriptedConflictResponse_t : uint32_t {
			ScriptedConflictResponse_t_SS_CONFLICT_ENQUEUE = 0x0,
			ScriptedConflictResponse_t_SS_CONFLICT_INTERRUPT = 0x1
		};

enum materialsystem2_BloomBlendMode_t : uint32_t {
			BloomBlendMode_t_BLOOM_BLEND_ADD = 0x0,
			BloomBlendMode_t_BLOOM_BLEND_BLUR = 0x2,
			BloomBlendMode_t_BLOOM_BLEND_SCREEN = 0x1
		};

enum rendersystemdx11_RsComparison_t : uint8_t {
			RsComparison_t_RS_CMP_ALWAYS = 0x7,
			RsComparison_t_RS_CMP_EQUAL = 0x2,
			RsComparison_t_RS_CMP_GREATER = 0x4,
			RsComparison_t_RS_CMP_GREATER_EQUAL = 0x6,
			RsComparison_t_RS_CMP_LESS = 0x1,
			RsComparison_t_RS_CMP_LESS_EQUAL = 0x3,
			RsComparison_t_RS_CMP_NEVER = 0x0,
			RsComparison_t_RS_CMP_NOT_EQUAL = 0x5
		};

enum rendersystemdx11_RsFillMode_t : uint8_t {
			RsFillMode_t_RS_FILL_SOLID = 0x0,
			RsFillMode_t_RS_FILL_WIREFRAME = 0x1
		};

enum rendersystemdx11_RsCullMode_t : uint8_t {
			RsCullMode_t_RS_CULL_BACK = 0x1,
			RsCullMode_t_RS_CULL_FRONT = 0x2,
			RsCullMode_t_RS_CULL_NONE = 0x0
		};
