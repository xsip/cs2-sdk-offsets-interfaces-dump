#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "GameTime_t.hpp"

class CTimeline {
    char _vtable_pad_550[0x8];
    GameTime_t m_timestamp;
    WorldGroupId_t m_nWorldGroupId;
    float32 m_flValues[64];
    int32_t m_nValueCounts[64];
    int32_t m_nBucketCount;
    float32 m_flInterval;
    float32 m_flFinalValue;
    TimelineCompression_t m_nCompressionType;
    bool m_bStopped;
    char end_pad_549[0x7];
};
