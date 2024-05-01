const Profile = require('./profileModel');

exports.getAllProfiles = async (req, res) => {
  try {
    const profiles = await Profile.find();
    res.status(200).json(profiles);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getprofileById = async (req, res) => {
  try {
    const profile = await Profile.findById(req.params.id);
    res.status(200).json(profile);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createprofile = async (req, res) => {
  const profile = new profile({
    title: req.body.title,
    content: req.body.content,
  });

  try {
    const newprofile = await profile.save();
    res.status(201).json(newprofile);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.updateprofile = async (req, res) => {
  try {
    const updatedprofile = await profile.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(updatedprofile);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteprofile = async (req, res) => {
  try {
    await profile.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'profile deleted successfully' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
