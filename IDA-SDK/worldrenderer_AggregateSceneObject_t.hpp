#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class worldrenderer_AggregateSceneObject_t {
    worldrenderer_ObjectTypeFlags_t m_allFlags;
    worldrenderer_ObjectTypeFlags_t m_anyFlags;
    int16_t m_nLayer;
    int16_t m_instanceStream;
    int16_t m_vertexAlbedoStream;
    char pad_2473[0x2];
    char m_aggregateMeshes[0x18];
    char m_lodSetups[0x18];
    char m_visClusterMembership[0x18];
    char m_fragmentTransforms[0x18];
    char m_renderableModel[0x8];
};
