#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "animgraphlib_CAnimInputDamping.hpp"

class animgraphlib_FootLockPoseOpFixedSettings {
    char m_footInfo[0x18];
    animgraphlib_CAnimInputDamping m_hipDampingSettings;
    int32_t m_nHipBoneIndex;
    animgraphlib_IKSolverType m_ikSolverType;
    bool m_bApplyTilt;
    bool m_bApplyHipDrop;
    bool m_bAlwaysUseFallbackHinge;
    bool m_bApplyFootRotationLimits;
    bool m_bApplyLegTwistLimits;
    char pad_262[0x3];
    float32 m_flMaxFootHeight;
    float32 m_flExtensionScale;
    float32 m_flMaxLegTwist;
    bool m_bEnableLockBreaking;
    char pad_263[0x3];
    float32 m_flLockBreakTolerance;
    float32 m_flLockBlendTime;
    bool m_bEnableStretching;
    char pad_264[0x3];
    float32 m_flMaxStretchAmount;
    float32 m_flStretchExtensionScale;
    char end_pad_265[0x4];
};
