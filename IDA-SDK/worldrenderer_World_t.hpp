#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "worldrenderer_WorldBuilderParams_t.hpp"
#include "worldrenderer_BakedLightingInfo_t.hpp"

class worldrenderer_World_t {
    worldrenderer_WorldBuilderParams_t m_builderParams;
    char m_worldNodes[0x18];
    worldrenderer_BakedLightingInfo_t m_worldLightingInfo;
    char m_entityLumps[0x18];
};
