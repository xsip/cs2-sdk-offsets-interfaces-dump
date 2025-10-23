#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "mathlib_extended_AABB_t.hpp"

class worldrenderer_ClutterSceneObject_t {
    mathlib_extended_AABB_t m_Bounds;
    worldrenderer_ObjectTypeFlags_t m_flags;
    int16_t m_nLayer;
    char pad_2477[0x2];
    char m_instancePositions[0x18];
    char pad_2478[0x18];
    char m_instanceScales[0x18];
    char m_instanceTintSrgb[0x18];
    char m_tiles[0x18];
    char m_renderableModel[0x8];
    CUtlStringToken m_materialGroup;
    float32 m_flBeginCullSize;
    float32 m_flEndCullSize;
    char end_pad_2479[0x4];
};
