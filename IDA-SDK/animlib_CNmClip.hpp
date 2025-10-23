#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "animlib_CNmSyncTrack.hpp"
#include "animlib_CNmRootMotionData.hpp"

class animlib_CNmClip {
    char m_skeleton[0x8];
    uint32_t m_nNumFrames;
    float32 m_flDuration;
    CUtlBinaryBlock m_compressedPoseData;
    char m_trackCompressionSettings[0x18];
    char m_compressedPoseOffsets[0x18];
    char m_floatCurveIDs[0x18];
    char m_floatCurveDefs[0x18];
    char m_compressedFloatCurveData[0x18];
    char m_compressedFloatCurveOffsets[0x18];
    char pad_1735[0x28];
    char m_secondaryAnimations[0x20];
    animlib_CNmSyncTrack m_syncTrack;
    char pad_1736[0x8];
    animlib_CNmRootMotionData m_rootMotion;
    bool m_bIsAdditive;
    char pad_1737[0x7];
    char m_modelSpaceSamplingChain[0x18];
    char m_modelSpaceBoneSamplingIndices[0x18];
    char end_pad_1738[0x8];
};
