#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "modellib_CPhysSurfacePropertiesPhysics.hpp"
#include "modellib_CPhysSurfacePropertiesVehicle.hpp"
#include "modellib_CPhysSurfacePropertiesSoundNames.hpp"
#include "modellib_CPhysSurfacePropertiesAudio.hpp"

class modellib_CPhysSurfaceProperties {
    CUtlString m_name;
    uint32_t m_nameHash;
    uint32_t m_baseNameHash;
    char pad_353[0x8];
    bool m_bHidden;
    char pad_354[0x7];
    CUtlString m_description;
    modellib_CPhysSurfacePropertiesPhysics m_physics;
    modellib_CPhysSurfacePropertiesVehicle m_vehicleParams;
    modellib_CPhysSurfacePropertiesSoundNames m_audioSounds;
    modellib_CPhysSurfacePropertiesAudio m_audioParams;
};
