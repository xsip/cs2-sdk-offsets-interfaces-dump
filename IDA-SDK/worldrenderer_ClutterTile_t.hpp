#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "mathlib_extended_AABB_t.hpp"

class worldrenderer_ClutterTile_t {
    uint32_t m_nFirstInstance;
    uint32_t m_nLastInstance;
    mathlib_extended_AABB_t m_BoundsWs;
};
