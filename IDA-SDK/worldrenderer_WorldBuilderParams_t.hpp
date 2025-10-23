#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "worldrenderer_BakedLightingInfo_t.hpp"

class worldrenderer_WorldBuilderParams_t {
    float32 m_flMinDrawVolumeSize;
    bool m_bBuildBakedLighting;
    bool m_bAggregateInstanceStreams;
    char pad_2496[0x2];
    worldrenderer_BakedLightingInfo_t m_bakedLightingInfo;
    uint64_t m_nCompileTimestamp;
    uint64_t m_nCompileFingerprint;
};
