#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "animgraphlib_TraceSettings_t.hpp"

class animgraphlib_FootFixedSettings {
    animgraphlib_TraceSettings_t m_traceSettings;
    char pad_260[0x8];
    VectorAligned m_vFootBaseBindPosePositionMS;
    float32 m_flFootBaseLength;
    float32 m_flMaxRotationLeft;
    float32 m_flMaxRotationRight;
    int32_t m_footstepLandedTagIndex;
    bool m_bEnableTracing;
    char pad_261[0x3];
    float32 m_flTraceAngleBlend;
    int32_t m_nDisableTagIndex;
    int32_t m_nFootIndex;
};
