#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "entity2_GameTime_t.hpp"

class client_CTimeline {
    void **__vftable_0;
    entity2_GameTime_t m_timestamp;
    WorldGroupId_t m_nWorldGroupId;
    float32 m_flValues[64];
    int32_t m_nValueCounts[64];
    int32_t m_nBucketCount;
    float32 m_flInterval;
    float32 m_flFinalValue;
    client_TimelineCompression_t m_nCompressionType;
    bool m_bStopped;
    char end_pad_1926[0x7];
};
