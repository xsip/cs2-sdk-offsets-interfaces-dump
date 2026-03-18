#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "worldrenderer_VoxelVisBlockOffset_t.hpp"
#include "worldrenderer_VoxelVisBlockOffset_t.hpp"
#include "worldrenderer_VoxelVisBlockOffset_t.hpp"
#include "worldrenderer_VoxelVisBlockOffset_t.hpp"
#include "worldrenderer_VoxelVisBlockOffset_t.hpp"
#include "worldrenderer_VoxelVisBlockOffset_t.hpp"

class worldrenderer_CVoxelVisibility {
    void **__vftable_0;
    void **__vftable_1;
    void **__vftable_2;
    void **__vftable_3;
    void **__vftable_4;
    void **__vftable_5;
    void **__vftable_6;
    void **__vftable_7;
    uint32_t m_nBaseClusterCount;
    uint32_t m_nPVSBytesPerCluster;
    Vector m_vMinBounds;
    Vector m_vMaxBounds;
    float32 m_flGridSize;
    uint32_t m_nSkyVisibilityCluster;
    uint32_t m_nSunVisibilityCluster;
    worldrenderer_VoxelVisBlockOffset_t m_NodeBlock;
    worldrenderer_VoxelVisBlockOffset_t m_RegionBlock;
    worldrenderer_VoxelVisBlockOffset_t m_EnclosedClusterListBlock;
    worldrenderer_VoxelVisBlockOffset_t m_EnclosedClustersBlock;
    worldrenderer_VoxelVisBlockOffset_t m_MasksBlock;
    worldrenderer_VoxelVisBlockOffset_t m_nVisBlocks;
    char end_pad_2570[0x4];
};
