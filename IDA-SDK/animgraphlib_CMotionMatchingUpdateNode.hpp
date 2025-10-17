#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "animgraphlib_CAnimNodePath.hpp"
#include "animgraphlib_CMotionDataSet.hpp"
#include "animgraphlib_CBlendCurve.hpp"
#include "animgraphlib_CAnimInputDamping.hpp"

class animgraphlib_CMotionMatchingUpdateNode {
    char vTable16[0x18];
    animgraphlib_CAnimNodePath m_nodePath;
    animgraphlib_AnimNodeNetworkMode m_networkMode;
    char pad_17[0x4];
    CUtlString m_name;
    animgraphlib_CMotionDataSet m_dataSet;
    char m_metrics[0x18];
    char m_weights[0x18];
    char pad_179[0x38];
    bool m_bSearchEveryTick;
    char pad_180[0x3];
    float32 m_flSearchInterval;
    bool m_bSearchWhenClipEnds;
    bool m_bSearchWhenGoalChanges;
    char pad_181[0x2];
    animgraphlib_CBlendCurve m_blendCurve;
    float32 m_flSampleRate;
    float32 m_flBlendTime;
    bool m_bLockClipWhenWaning;
    char pad_182[0x3];
    float32 m_flSelectionThreshold;
    float32 m_flReselectionTimeWindow;
    bool m_bEnableRotationCorrection;
    bool m_bGoalAssist;
    char pad_183[0x2];
    float32 m_flGoalAssistDistance;
    float32 m_flGoalAssistTolerance;
    char pad_184[0x4];
    animgraphlib_CAnimInputDamping m_distanceScale_Damping;
    float32 m_flDistanceScale_OuterRadius;
    float32 m_flDistanceScale_InnerRadius;
    float32 m_flDistanceScale_MaxScale;
    float32 m_flDistanceScale_MinScale;
    bool m_bEnableDistanceScaling;
    char end_pad_185[0x7];
};
