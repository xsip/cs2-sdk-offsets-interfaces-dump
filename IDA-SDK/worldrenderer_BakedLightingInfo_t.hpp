#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class worldrenderer_BakedLightingInfo_t {
    uint32_t m_nLightmapVersionNumber;
    uint32_t m_nLightmapGameVersionNumber;
    Vector2D m_vLightmapUvScale;
    bool m_bHasLightmaps;
    bool m_bBakedShadowsGamma20;
    bool m_bCompressionEnabled;
    bool m_bSHLightmaps;
    uint8_t m_nChartPackIterations;
    uint8_t m_nVradQuality;
    char pad_2494[0x2];
    char m_lightMaps[0x18];
    char m_bakedShadows[0x18];
};
