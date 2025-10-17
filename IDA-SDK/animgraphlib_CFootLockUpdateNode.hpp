#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "animgraphlib_CAnimNodePath.hpp"
#include "animgraphlib_CAnimUpdateNodeRef.hpp"
#include "animgraphlib_FootLockPoseOpFixedSettings.hpp"
#include "animgraphlib_CAnimInputDamping.hpp"
#include "animgraphlib_CAnimInputDamping.hpp"

class animgraphlib_CFootLockUpdateNode {
    char vTable16[0x18];
    animgraphlib_CAnimNodePath m_nodePath;
    animgraphlib_AnimNodeNetworkMode m_networkMode;
    char pad_17[0x4];
    CUtlString m_name;
    char vTable20[0x8];
    animgraphlib_CAnimUpdateNodeRef m_pChildNode;
    animgraphlib_FootLockPoseOpFixedSettings m_opFixedSettings;
    char pad_137[0x8];
    char m_footSettings[0x18];
    animgraphlib_CAnimInputDamping m_hipShiftDamping;
    animgraphlib_CAnimInputDamping m_rootHeightDamping;
    float32 m_flStrideCurveScale;
    float32 m_flStrideCurveLimitScale;
    float32 m_flStepHeightIncreaseScale;
    float32 m_flStepHeightDecreaseScale;
    float32 m_flHipShiftScale;
    float32 m_flBlendTime;
    float32 m_flMaxRootHeightOffset;
    float32 m_flMinRootHeightOffset;
    float32 m_flTiltPlanePitchSpringStrength;
    float32 m_flTiltPlaneRollSpringStrength;
    bool m_bApplyFootRotationLimits;
    bool m_bApplyHipShift;
    bool m_bModulateStepHeight;
    bool m_bResetChild;
    bool m_bEnableVerticalCurvedPaths;
    bool m_bEnableRootHeightDamping;
    char end_pad_138[0x2];
};
